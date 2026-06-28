import type { ImageMetadata } from "astro";

import { portfolioImages } from "@/data/portfolioImages";
import * as site from "@/data/site";

type LocalizedText = Record<site.Lang, string>;

export type ProjectWithImages = Omit<site.Project, "images"> & {
  images?: Array<{ src: ImageMetadata; alt: LocalizedText }>;
};

const imageSourcesByProjectId: Partial<Record<site.Project["id"], ImageMetadata[]>> = {
  virion: [
    portfolioImages.virion.geometryLab,
    portfolioImages.virion.biology,
    portfolioImages.virion.physics,
    portfolioImages.virion.chemistry,
  ],
  "gran-teatro": [
    portfolioImages.granTeatro.screenshot1,
    portfolioImages.granTeatro.screenshot2,
    portfolioImages.granTeatro.screenshot3,
  ],
  "sun-burn-nitro": [
    portfolioImages.sunBurnNitro.poster1,
    portfolioImages.sunBurnNitro.image,
    portfolioImages.sunBurnNitro.screenshot1,
    portfolioImages.sunBurnNitro.screenshot2,
  ],
  mechanoccult: [
    portfolioImages.mechanoccult.gameplay1,
    portfolioImages.mechanoccult.gameplay2,
  ],
  "gpu-marine-graphics-demo": [
    portfolioImages.gpuMarineGraphicsDemo.vistaGeneral,
    portfolioImages.gpuMarineGraphicsDemo.dynamicTessellationDetail,
    portfolioImages.gpuMarineGraphicsDemo.fishDetail,
    portfolioImages.gpuMarineGraphicsDemo.seagullsDetail,
  ],
  "darnos-tiempo": [
    portfolioImages.darnosTiempo.screenshot1,
    portfolioImages.darnosTiempo.screenshot2,
  ],
  "vulkan-engine": [
    portfolioImages.vulkanEngine.shadowMappingBias,
    portfolioImages.vulkanEngine.shadowMappingPcf2Lights,
    portfolioImages.vulkanEngine.rtShadowsSoft2Lights,
  ],
};

const withProjectImages = <T extends site.Project>(project: T): T & ProjectWithImages => {
  const imageSources = imageSourcesByProjectId[project.id];
  if (!project.images?.length || !imageSources?.length) {
    return project as T & ProjectWithImages;
  }

  return {
    ...project,
    images: project.images.map((image, index) => ({
      ...image,
      src: imageSources[index] ?? imageSources[imageSources.length - 1],
    })),
  };
};

export const portfolioProjects = {
  professional: site.portfolioProjects.professional.map(withProjectImages),
  personal: site.portfolioProjects.personal.map(withProjectImages),
} satisfies Record<"professional" | "personal", ProjectWithImages[]>;

export const allPortfolioProjects = [
  ...portfolioProjects.professional.map((project) => ({ ...project, group: "professional" as const })),
  ...portfolioProjects.personal.map((project) => ({ ...project, group: "personal" as const })),
];

export const detailPortfolioProjects = allPortfolioProjects.filter((project) => project.detailEnabled && project.detailSlug);
