import virionGeometryLab from "@/assets/portfolio/virion/geometry-lab.png";
import virionBiology from "@/assets/portfolio/virion/biology.png";
import virionPhysics from "@/assets/portfolio/virion/physics.png";
import virionChemistry from "@/assets/portfolio/virion/chemistry.png";

import granTeatroScreenshot1 from "@/assets/portfolio/gran-teatro/screenshot-1.jpg";
import granTeatroScreenshot2 from "@/assets/portfolio/gran-teatro/screenshot-2.jpg";
import granTeatroScreenshot3 from "@/assets/portfolio/gran-teatro/screenshot-3.jpg";

import sunBurnNitroPoster1 from "@/assets/portfolio/sun-burn-nitro/poster-1.png";
import sunBurnNitroImage from "@/assets/portfolio/sun-burn-nitro/image.png";
import sunBurnNitroScreenshot1 from "@/assets/portfolio/sun-burn-nitro/screenshot-1.png";
import sunBurnNitroScreenshot2 from "@/assets/portfolio/sun-burn-nitro/screenshot-2.png";

import mechanoccultGameplay1 from "@/assets/portfolio/mechanoccult/gameplay-1.png";
import mechanoccultGameplay2 from "@/assets/portfolio/mechanoccult/gameplay-2.png";

import gpuMarineVistaGeneral from "@/assets/portfolio/gpu-marine-graphics-demo/vista-general.jpg";
import gpuMarineDynamicTessellation from "@/assets/portfolio/gpu-marine-graphics-demo/dynamic-tessellation-detail.jpg";
import gpuMarineFishDetail from "@/assets/portfolio/gpu-marine-graphics-demo/fish-detail.jpg";
import gpuMarineSeagullsDetail from "@/assets/portfolio/gpu-marine-graphics-demo/seagulls-detail.jpg";

import darnosTiempoScreenshot1 from "@/assets/portfolio/darnos-tiempo/screenshot-1.png";
import darnosTiempoScreenshot2 from "@/assets/portfolio/darnos-tiempo/screenshot-2.png";

import vulkanEngineShadowMappingBias from "@/assets/portfolio/vulkan-engine/shadow-mapping-bias.png";
import vulkanEngineShadowMappingPcf2Lights from "@/assets/portfolio/vulkan-engine/shadow-mapping-pcf-2-lights.png";
import vulkanEngineRtShadowsSoft2Lights from "@/assets/portfolio/vulkan-engine/rt-shadows-soft-2-lights.png";

export const portfolioImages = {
  virion: {
    geometryLab: virionGeometryLab,
    biology: virionBiology,
    physics: virionPhysics,
    chemistry: virionChemistry,
  },
  granTeatro: {
    screenshot1: granTeatroScreenshot1,
    screenshot2: granTeatroScreenshot2,
    screenshot3: granTeatroScreenshot3,
  },
  sunBurnNitro: {
    poster1: sunBurnNitroPoster1,
    image: sunBurnNitroImage,
    screenshot1: sunBurnNitroScreenshot1,
    screenshot2: sunBurnNitroScreenshot2,
  },
  mechanoccult: {
    gameplay1: mechanoccultGameplay1,
    gameplay2: mechanoccultGameplay2,
  },
  gpuMarineGraphicsDemo: {
    vistaGeneral: gpuMarineVistaGeneral,
    dynamicTessellationDetail: gpuMarineDynamicTessellation,
    fishDetail: gpuMarineFishDetail,
    seagullsDetail: gpuMarineSeagullsDetail,
  },
  darnosTiempo: {
    screenshot1: darnosTiempoScreenshot1,
    screenshot2: darnosTiempoScreenshot2,
  },
  vulkanEngine: {
    shadowMappingBias: vulkanEngineShadowMappingBias,
    shadowMappingPcf2Lights: vulkanEngineShadowMappingPcf2Lights,
    rtShadowsSoft2Lights: vulkanEngineRtShadowsSoft2Lights,
  },
} as const;
