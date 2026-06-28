export type Lang = "en" | "es";

type Localized<T> = Record<Lang, T>;
export type RichTextPart = string | { label: string; href: string };

export const languages: Record<Lang, { label: string; home: string }> = {
  en: { label: "EN", home: "/" },
  es: { label: "ES", home: "/es/" },
};

export const routeMap = {
  home: { en: "/", es: "/es/" },
  portfolio: { en: "/portfolio", es: "/es/portfolio" },
  cv: { en: "/cv", es: "/es/cv" },
  team: { en: "/team", es: "/es/equipo" },
  blog: { en: "/blog", es: "/es/blog" },
} satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routeMap;

export const hiddenRouteKeys: RouteKey[] = ["blog"];

export const navItems: Localized<Array<{ key: RouteKey; label: string }>> = {
  en: [
    { key: "home", label: "Home" },
    { key: "portfolio", label: "Portfolio" },
    { key: "cv", label: "CV" },
    { key: "blog", label: "Blog" },
  ],
  es: [
    { key: "home", label: "Inicio" },
    { key: "portfolio", label: "Portfolio" },
    { key: "cv", label: "CV" },
    { key: "blog", label: "Blog" },
  ],
};

export const profile = {
  name: "Jordan Amaya",
  email: "jaamayac1@gmail.com",
  location: { en: "Madrid, Spain", es: "Madrid, España" },
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jordanamaya/" },
    { label: "GitHub", href: "https://github.com/JAAmaya" },
    { label: "Itch.io", href: "https://jordanamaya.itch.io" },
    { label: "Linktree", href: "https://linktr.ee/jordanamaya" },
  ],
};

export const home: Localized<{
  eyebrow: string;
  title: string;
  primaryCta: string;
  secondaryCta: string;
  about: {
    title: string;
    body: string;
    facts: string[];
  };
  cards: Array<{ key: RouteKey; title: string; description: string }>;
}> = {
  en: {
    eyebrow: "Unity developer and game designer",
    title: "Jordan Amaya",
    primaryCta: "View portfolio",
    secondaryCta: "Read CV",
    about: {
      title: "About",
      body:
        "Game developer with 2 years of experience specializing in the Unity and C# ecosystem. My work focuses on performance and architecture: clean code, optimization, memory management, rendering, physics, and applied mathematics. My design background complements my technical perspective, helping me understand development needs and build modular, stable, configurable architectures that make editing, tuning, and polishing the game easier.",
      facts: ["Unity", "VR", "Scripting", "Gameplay Logic", "Computer Graphics"],
    },
    cards: [
      {
        key: "portfolio",
        title: "Portfolio",
        description:
          "Games, VR applications, and technical prototypes where I implemented gameplay logic, rendering features, editor tools, UI flows, and release tasks.",
      },
      {
        key: "cv",
        title: "CV",
        description: "A concise view of my Unity, VR, graphics, and game-development background.",
      },
      {
        key: "blog",
        title: "Development blog",
        description: "Technical decisions, production lessons, postmortems, and practical notes from development work.",
      },
    ],
  },
  es: {
    eyebrow: "Desarrollador Unity y diseñador de videojuegos",
    title: "Jordan Amaya",
    primaryCta: "Ver portfolio",
    secondaryCta: "Leer CV",
    about: {
      title: "Sobre mí",
      body:
        "Desarrollador de videojuegos con 2 años de experiencia especializada en el ecosistema Unity y C#. Mi trabajo se centra en el rendimiento y la arquitectura: código limpio, optimización, gestión de memoria, rendering, físicas y matemáticas aplicadas. Mi faceta como diseñador complementa mi visión técnica, permitiéndome entender las necesidades del desarrollo para construir arquitecturas modulares, estables y configurables que faciliten la edición, el ajuste y el pulido del juego.",
      facts: ["Unity", "VR", "Scripting", "Gameplay Logic", "Computer Graphics"],
    },
    cards: [
      {
        key: "portfolio",
        title: "Portfolio",
        description:
          "Videojuegos, aplicaciones VR y prototipos técnicos donde implementé lógica de gameplay, técnicas de rendering, herramientas de editor, flujos de UI y tareas de publicación.",
      },
      {
        key: "cv",
        title: "CV",
        description: "Una visión directa de mi perfil en Unity, VR, gráficos y desarrollo de videojuegos.",
      },
      {
        key: "blog",
        title: "Blog de desarrollo",
        description: "Decisiones técnicas, aprendizajes de producción, postmortems y notas prácticas de desarrollo.",
      },
    ],
  },
};

export const cv = {
  skills: [
    "Unity",
    "VR",
    "C#",
    "Computer Graphics",
    "3D Math",
    "Physics",
    "UI/UX",
    "Testing",
    "WebGL",
    "Android",
  ],
  languages: [
    { en: "Spanish native", es: "Español nativo" },
    { en: "English C1", es: "Inglés C1" },
  ],
  experience: {
    en: [
      {
        role: "Unity Developer",
        company: "Vacaflama Studio",
        period: "Jun 2024 - Present",
        description: [
          "Unity Developer and technical lead at Vacaflama Studio. I work on C# scripting, netcode, game design, optimization, editor tooling, and asset/UI integration. I published ",
          { label: "\"El Gran Teatro del Mundo: El Videojuego\"", href: "/portfolio/gran-teatro" },
          " for WebGL and Android, and I am currently developing ",
          { label: "\"SUN BURN NITRO\"", href: "/portfolio/sun-burn-nitro" },
          ", a multiplayer arcade racing game.",
        ],
        links: [{ label: "El Gran Teatro del Mundo", href: "/portfolio/gran-teatro" }],
      },
      {
        role: "VR Unity Developer",
        company: "Premium Cine, VR Department",
        period: "Oct 2023 - May 2024",
        description: [
          "VR Unity Developer at Premium Cine, VR Department. I implemented VR interactions, user flows, and asset integration for four ",
          { label: "\"VIRION\"", href: "/portfolio/virion" },
          " educational applications, an Erasmus+ project focused on immersive STEM learning. I also prepared content and interfaces so the experiences were clear, stable, and localization-ready.",
        ],
        links: [{ label: "VIRION Project", href: "/portfolio/virion" }],
      },
    ],
    es: [
      {
        role: "Desarrollador Unity",
        company: "Vacaflama Studio",
        period: "Jun 2024 - Presente",
        description: [
          "Desarrollador Unity y líder técnico en Vacaflama Studio. Trabajo en scripting C#, netcode, game design, optimización, creación de herramientas de editor e integración de assets e interfaces. Publiqué ",
          { label: "\"El Gran Teatro del Mundo: El Videojuego\"", href: "/es/portfolio/gran-teatro" },
          " para WebGL y Android, y actualmente desarrollo ",
          { label: "\"SUN BURN NITRO\"", href: "/es/portfolio/sun-burn-nitro" },
          ", un juego de carreras arcade multijugador.",
        ],
        links: [{ label: "El Gran Teatro del Mundo", href: "/es/portfolio/gran-teatro" }],
      },
      {
        role: "Desarrollador VR en Unity",
        company: "Premium Cine, Departamento VR",
        period: "Oct 2023 - May 2024",
        description: [
          "Desarrollador VR en Unity en Premium Cine, Departamento VR. Implementé interacciones VR, flujos de usuario e integración de assets para cuatro aplicaciones educativas de ",
          { label: "\"VIRION\"", href: "/es/portfolio/virion" },
          ", un proyecto Erasmus+ centrado en aprendizaje inmersivo STEM. También preparé contenido e interfaces para que las experiencias fueran claras, estables y localizables.",
        ],
        links: [{ label: "VIRION Project", href: "/es/portfolio/virion" }],
      },
    ],
  },
  education: {
    en: [
      {
        title: "Master's Degree in Computer Graphics, Games and Virtual Reality",
        institution: "Universidad Rey Juan Carlos",
        period: "Oct 2025 - Jun 2026",
        description: "Specialized education in computer graphics, games, and virtual reality.",
      },
      {
        title: "Bachelor's Degree in Game Design and Development",
        institution: "Universidad Rey Juan Carlos",
        period: "Sep 2019 - May 2024",
        description:
          "Final degree project focused on procedural level generation using Wave Function Collapse.",
      },
    ],
    es: [
      {
        title: "Máster en Informática Gráfica, Juegos y Realidad Virtual",
        institution: "Universidad Rey Juan Carlos",
        period: "Oct 2025 - Jun 2026",
        description: "Formación especializada en gráficos por computadora, videojuegos y realidad virtual.",
      },
      {
        title: "Grado en Diseño y Desarrollo de Videojuegos",
        institution: "Universidad Rey Juan Carlos",
        period: "Sep 2019 - May 2024",
        description:
          "Trabajo de Fin de Grado centrado en generación procedural de niveles usando Wave Function Collapse.",
      },
    ],
  },
};

export type Project = {
  id: string;
  title: string;
  year: string;
  context: Localized<string>;
  teamOrClient: string;
  engine: string;
  type: Localized<string>;
  status: Localized<string>;
  description: Localized<string>;
  contributionTags: string[];
  highlights: Localized<string[]>;
  stack: string[];
  links: Array<{ label: string; href?: string }>;
  images?: Array<{ src: string; alt: Localized<string> }>;
  detailSlug?: string;
  detailEnabled?: boolean;
  detailRole?: Localized<string>;
  hiddenFromPortfolio?: boolean;
  publicPortfolioCategory?: "professional" | "independent" | "technical";
  cardSummary?: Localized<string>;
  roleSummary?: Localized<string>;
  thumbLabel: string;
  visualTone: "blue" | "amber" | "green" | "pink" | "violet" | "red";
};

export const portfolioProjects: Record<"professional" | "personal", Project[]> = {
  professional: [
    {
      id: "virion",
      title: "VIRION Project",
      year: "2024",
      context: { en: "Professional project", es: "Proyecto profesional" },
      teamOrClient: "Premium Cine, VR Department",
      engine: "Unity VR",
      type: { en: "Educational VR applications", es: "Aplicaciones VR educativas" },
      status: { en: "VR Project", es: "Proyecto VR" },
      description: {
        en: "A set of four educational VR applications created for VIRION, a pan-European Erasmus+ project exploring immersive learning for STEM subjects.",
        es: "Conjunto de cuatro aplicaciones VR educativas creadas para VIRION, un proyecto paneuropeo financiado por Erasmus+ sobre aprendizaje inmersivo en materias STEM.",
      },
      contributionTags: ["Scripting", "VR Interactions", "Asset Integration", "Localization Support"],
      highlights: {
        en: [
          "Implemented Unity VR interaction and gameplay logic across the applications.",
          "Integrated educational assets into stable scene flows and user interactions.",
          "Prepared content structures with localization-ready text and presentation support.",
          "Worked within a professional production pipeline with documentation and iterative review.",
        ],
        es: [
          "Implementé interacción VR y lógica de gameplay en Unity para las aplicaciones.",
          "Integré assets educativos en flujos de escena e interacciones estables.",
          "Preparé estructuras de contenido con textos y presentación listos para localización.",
          "Trabajé dentro de un pipeline profesional con documentación y revisión iterativa.",
        ],
      },
      stack: ["Unity VR", "C#", "3D", "UI/UX"],
      links: [
        { label: "VIRION", href: "https://www.virion-project.eu/" },
        { label: "Download", href: "https://www.virion-project.eu/virion-vr-app-download/" },
        { label: "Physics video", href: "https://www.youtube.com/watch?v=ah5T3O1hQ4g" },
        { label: "Biology video", href: "https://www.youtube.com/watch?v=WimLSQqzk3o" },
        { label: "Math video", href: "https://www.youtube.com/watch?v=DBtGz0SxtCg" },
        { label: "Chemistry video", href: "https://www.youtube.com/watch?v=ncSQR8kVEeo" },
      ],
      images: [
        {
          src: "/portfolio/virion/geometry-lab.png",
          alt: { en: "VIRION geometry VR lab screenshot", es: "Captura del laboratorio VR de geometría de VIRION" },
        },
        {
          src: "/portfolio/virion/biology.png",
          alt: { en: "VIRION biology VR application screenshot", es: "Captura de la aplicación VR de biología de VIRION" },
        },
        {
          src: "/portfolio/virion/physics.png",
          alt: { en: "VIRION physics VR application screenshot", es: "Captura de la aplicación VR de física de VIRION" },
        },
        {
          src: "/portfolio/virion/chemistry.png",
          alt: { en: "VIRION chemistry VR application screenshot", es: "Captura de la aplicación VR de química de VIRION" },
        },
      ],
      detailSlug: "virion",
      detailEnabled: true,
      detailRole: { en: "Unity VR Developer", es: "Desarrollador Unity VR" },
      publicPortfolioCategory: "professional",
      cardSummary: {
        en: "Four educational VR applications built for a European STEM learning initiative.",
        es: "Cuatro aplicaciones VR educativas creadas para una iniciativa europea de aprendizaje STEM.",
      },
      roleSummary: {
        en: "I implemented Unity VR interactions, user flows, educational asset integration, and localization-ready text structures for the STEM modules.",
        es: "Implementé interacciones VR en Unity, flujos de usuario, integración de assets educativos y estructuras de texto preparadas para localización en los módulos STEM.",
      },
      thumbLabel: "VR",
      visualTone: "blue",
    },
    {
      id: "gran-teatro",
      title: "El Gran Teatro del Mundo: El Videojuego",
      year: "2024",
      context: { en: "Professional commission", es: "Encargo profesional" },
      teamOrClient: "Vacaflama Studio / Compañía Nacional de Teatro Clásico",
      engine: "Unity",
      type: { en: "2D graphic adventure", es: "Aventura gráfica 2D" },
      status: { en: "Published Project", es: "Proyecto publicado" },
      description: {
        en: "A published 2D graphic adventure for WebGL and Android, created as a videogame reinterpretation of the classical stage play.",
        es: "Aventura gráfica 2D publicada para WebGL y Android, creada como reinterpretación en videojuego de la obra teatral clásica.",
      },
      contributionTags: ["Scripting", "Publishing", "Asset Integration", "Tools"],
      highlights: {
        en: [
          "Implemented the full Unity codebase for gameplay, screen flow and progression.",
          "Built save flow, dialogue logic, puzzle interactions, scene interactions and internal editor tools.",
          "Integrated art, UI and animations while preserving pixel-art fidelity across formats.",
          "Prepared and handled publication for Itch.io WebGL and Android.",
        ],
        es: [
          "Implementé toda la base de código Unity de gameplay, flujo de pantallas y progresión.",
          "Creé el flujo de guardado, la lógica de diálogos, las interacciones de puzles, la interacción de escenas y herramientas internas de editor.",
          "Integré arte, UI y animaciones cuidando la fidelidad del pixel art en distintos formatos.",
          "Preparé y gestioné la publicación en Itch.io WebGL y Android.",
        ],
      },
      stack: ["Unity", "C#", "WebGL", "Android"],
      links: [{ label: "Itch.io", href: "https://cacharro-games.itch.io/el-gran-teatro" }, { label: "Play Store" }],
      images: [
        {
          src: "/portfolio/gran-teatro/screenshot-1.jpg",
          alt: { en: "El Gran Teatro del Mundo game scene", es: "Escena del juego El Gran Teatro del Mundo" },
        },
        {
          src: "/portfolio/gran-teatro/screenshot-2.jpg",
          alt: { en: "El Gran Teatro del Mundo dialogue scene", es: "Escena de diálogo de El Gran Teatro del Mundo" },
        },
        {
          src: "/portfolio/gran-teatro/screenshot-3.jpg",
          alt: { en: "El Gran Teatro del Mundo gameplay screenshot", es: "Captura de gameplay de El Gran Teatro del Mundo" },
        },
      ],
      detailSlug: "gran-teatro",
      detailEnabled: true,
      detailRole: { en: "Unity Developer / Programmer", es: "Unity Developer / Programmer" },
      publicPortfolioCategory: "professional",
      cardSummary: {
        en: "A published 2D graphic adventure released on WebGL and Android.",
        es: "Una aventura gráfica 2D publicada para WebGL y Android.",
      },
      roleSummary: {
        en: "I implemented the Unity gameplay code, screen flow, save flow, dialogue logic, puzzle interactions, UI integration, internal tools and WebGL/Android release preparation.",
        es: "Implementé el código Unity de gameplay, el flujo de pantallas, el guardado, la lógica de diálogos, las interacciones de puzles, la integración de UI, herramientas internas y la preparación de publicación WebGL/Android.",
      },
      thumbLabel: "GT",
      visualTone: "amber",
    },
    {
      id: "sun-burn-nitro",
      title: "SUN BURN NITRO",
      year: "2027",
      context: { en: "In development", es: "En desarrollo" },
      teamOrClient: "Vacaflama",
      engine: "Unity",
      type: { en: "Game in development", es: "Juego en desarrollo" },
      status: { en: "In development", es: "En desarrollo" },
      description: {
        en: "An arcade racing game in development at Vacaflama, built around fast competitive races, distinct characters and ability-driven play.",
        es: "Juego arcade de carreras en desarrollo en Vacaflama, centrado en carreras competitivas rápidas, personajes diferenciados y habilidades.",
      },
      contributionTags: ["Scripting", "Netcode", "Game Design"],
      highlights: {
        en: [
          "Defined and supported technical direction as part of the studio leadership.",
          "Implemented gameplay foundations for race flow, character abilities and competitive interactions.",
          "Developed race logic with future netcode and multiplayer constraints in mind.",
          "Prepared project material and structure for public presentation.",
        ],
        es: [
          "Definí y apoyé la dirección técnica como parte del liderazgo del estudio.",
          "Implementé bases de gameplay para flujo de carrera, habilidades de personajes e interacciones competitivas.",
          "Desarrollé lógica de carrera pensando en futuras restricciones de netcode y multijugador.",
          "Preparé material y estructura del proyecto para presentación pública.",
        ],
      },
      stack: ["Unity", "C#", "Game Design"],
      links: [
        { label: "Drive material", href: "https://drive.google.com/drive/folders/1TJ0oOw-fx6WJXttSTwjsLxaFX2216tYm" },
      ],
      images: [
        {
          src: "/portfolio/sun-burn-nitro/poster-1.png",
          alt: { en: "SUN BURN NITRO poster art", es: "Cartel de SUN BURN NITRO" },
        },
        {
          src: "/portfolio/sun-burn-nitro/image.png",
          alt: { en: "SUN BURN NITRO promotional image", es: "Imagen promocional de SUN BURN NITRO" },
        },
        {
          src: "/portfolio/sun-burn-nitro/screenshot-1.png",
          alt: { en: "SUN BURN NITRO gameplay image", es: "Imagen de gameplay de SUN BURN NITRO" },
        },
        {
          src: "/portfolio/sun-burn-nitro/screenshot-2.png",
          alt: { en: "SUN BURN NITRO character lineup image", es: "Imagen de personajes de SUN BURN NITRO" },
        },
      ],
      detailSlug: "sun-burn-nitro",
      detailEnabled: true,
      detailRole: { en: "CTO / Technical Developer", es: "CTO / Technical Developer" },
      publicPortfolioCategory: "professional",
      cardSummary: {
        en: "An arcade racing game in development focused on competitive abilities and future multiplayer.",
        es: "Un juego arcade de carreras multijugador centrado en habilidades competitivas. En desarrollo.",
      },
      roleSummary: {
        en: "I defined technical direction, prototyped race gameplay, implemented foundations for character abilities and competitive interactions, and prepared the project for future netcode constraints.",
        es: "Definí dirección técnica, prototipé gameplay de carreras, implementé bases para habilidades de personajes e interacciones competitivas, y preparé el proyecto para futuras restricciones de netcode.",
      },
      thumbLabel: "SN",
      visualTone: "red",
    },
  ],
  personal: [
    {
      id: "mechanoccult",
      title: "Mechanoccult",
      year: "2026",
      context: { en: "University master's project", es: "Proyecto universitario de máster" },
      teamOrClient: "Universidad Rey Juan Carlos / typtyp studios",
      engine: "Unity",
      type: { en: "Online multiplayer typing duel", es: "Duelo online de mecanografía" },
      status: { en: "Game", es: "Videojuego" },
      description: {
        en: "An online multiplayer typing duel game that combines real-time writing pressure with cards, spells and status effects.",
        es: "Juego multijugador online de duelos de mecanografía que combina presión de escritura en tiempo real con cartas, hechizos y estados.",
      },
      contributionTags: ["Scripting", "Netcode", "Game Design", "UI Integration"],
      highlights: {
        en: [
          "Designed modular card, spell and status-effect architecture based on ScriptableObjects.",
          "Implemented netcode-facing card effects, spell resolution and duel state for online matches.",
          "Separated typing state from presentation to support different gameplay contexts.",
          "Added persistence with platform-specific backend options.",
        ],
        es: [
          "Diseñé la arquitectura modular de cartas, hechizos y efectos de estado basada en ScriptableObjects.",
          "Implementé efectos de cartas, resolución de hechizos y estado del duelo orientados a netcode para partidas online.",
          "Separé el estado de escritura de la presentación para soportar distintos contextos de juego.",
          "Añadí persistencia con opciones de backend específicas por plataforma.",
        ],
      },
      stack: ["Unity", "C#", "Netcode", "ScriptableObjects"],
      links: [
        { label: "Itch.io", href: "https://typtyp-studios.itch.io/mechanoccult" },
        { label: "GitHub", href: "https://github.com/typtypstudios/game" },
      ],
      images: [
        {
          src: "/portfolio/mechanoccult/gameplay-1.png",
          alt: { en: "Mechanoccult typing duel gameplay screenshot", es: "Captura de gameplay de duelo de mecanografía de Mechanoccult" },
        },
        {
          src: "/portfolio/mechanoccult/gameplay-2.png",
          alt: { en: "Mechanoccult card and spell gameplay screenshot", es: "Captura de gameplay con cartas y hechizos de Mechanoccult" },
        },
      ],
      detailSlug: "mechanoccult",
      detailEnabled: true,
      detailRole: { en: "Technical Developer", es: "Technical Developer" },
      publicPortfolioCategory: "independent",
      cardSummary: {
        en: "An online multiplayer typing duel that mixes fast writing, cards, spells, and status effects.",
        es: "Un duelo online de mecanografía que combina escritura rápida, cartas, hechizos y estados.",
      },
      roleSummary: {
        en: "I designed the gameplay architecture for cards, spells and status effects, separated typing state from presentation, and implemented netcode-facing duel logic and persistence.",
        es: "Diseñé la arquitectura de gameplay para cartas, hechizos y efectos de estado, separé el estado de escritura de la presentación e implementé lógica de duelo orientada a netcode y persistencia.",
      },
      thumbLabel: "MC",
      visualTone: "violet",
    },
    {
      id: "gpu-marine-graphics-demo",
      title: "GPU Marine Graphics Demo",
      year: "2026",
      context: { en: "University graphics project", es: "Proyecto universitario de informática gráfica" },
      teamOrClient: "Universidad Rey Juan Carlos",
      engine: "Unity URP",
      type: { en: "Real-time graphics demo", es: "Demo gráfica en tiempo real" },
      status: { en: "Technical Demo", es: "Demo técnica" },
      description: {
        en: "A Unity URP technical demo focused on advanced graphics pipeline stages: adaptive ocean tessellation, displacement, procedural geometry and GPU-driven creature movement.",
        es: "Demo técnica en Unity URP centrada en etapas avanzadas del cauce gráfico: teselación adaptativa de océano, displacement, geometría procedural y movimiento de criaturas en GPU.",
      },
      contributionTags: ["Shaders", "Rendering", "GPU Simulation", "Procedural Geometry", "Technical Art"],
      highlights: {
        en: [
          "Implemented a URP ocean shader with adaptive tessellation, animated displacement, runtime wireframe, Fresnel, specular lighting and shoreline foam.",
          "Generated seagulls and fish from point primitives through geometry shaders, including per-instance variation and animated wings or tails.",
          "Built compute-shader movement using double buffering: GPU boids for seagulls and wave-aware vertical motion for fish.",
          "Prepared a clean Unity delivery project with only the scenes and dependencies needed for the demo.",
        ],
        es: [
          "Implementé un océano URP con teselación adaptativa, displacement animado, wireframe en runtime, Fresnel, especular y espuma de orilla.",
          "Generé gaviotas y peces desde primitivas de puntos mediante geometry shaders, con variación por instancia y animación de alas o colas.",
          "Desarrollé movimiento con compute shaders usando doble buffer: boids en GPU para gaviotas y movimiento vertical de peces sincronizado con las olas.",
          "Preparé un proyecto Unity limpio con solo las escenas y dependencias necesarias para la demo.",
        ],
      },
      stack: ["Unity", "URP", "HLSL", "C#", "Compute Shaders", "Tessellation"],
      links: [{ label: "GitHub", href: "https://github.com/JAAmaya/gpu-marine-graphics-demo" }],
      images: [
        {
          src: "/portfolio/gpu-marine-graphics-demo/vista-general.jpg",
          alt: { en: "GPU Marine Graphics Demo general ocean scene", es: "Vista general de la escena marina de GPU Marine Graphics Demo" },
        },
        {
          src: "/portfolio/gpu-marine-graphics-demo/dynamic-tessellation-detail.jpg",
          alt: { en: "Adaptive tessellation detail in the ocean shader", es: "Detalle de teselación adaptativa en el shader de océano" },
        },
        {
          src: "/portfolio/gpu-marine-graphics-demo/fish-detail.jpg",
          alt: { en: "Procedural fish rendered in the marine demo", es: "Peces procedurales renderizados en la demo marina" },
        },
        {
          src: "/portfolio/gpu-marine-graphics-demo/seagulls-detail.jpg",
          alt: { en: "Procedural seagulls rendered in the marine demo", es: "Gaviotas procedurales renderizadas en la demo marina" },
        },
      ],
      publicPortfolioCategory: "technical",
      cardSummary: {
        en: "A real-time graphics demo exploring tessellation, procedural geometry, and GPU-driven animation.",
        es: "Una demo gráfica en tiempo real sobre teselación, geometría procedural y animación en GPU.",
      },
      roleSummary: {
        en: "Implemented the full Unity URP technical demo, including HLSL shaders, procedural geometry, compute-shader movement and scene packaging.",
        es: "Implementé la demo técnica completa en Unity URP, incluyendo shaders HLSL, geometría procedural, movimiento con compute shaders y empaquetado de la escena.",
      },
      thumbLabel: "GPU",
      visualTone: "blue",
    },
    {
      id: "darnos-tiempo",
      title: "Darnos Tiempo",
      year: "2025",
      context: { en: "Game jam", es: "Game jam" },
      teamOrClient: "Vacaflama",
      engine: "Unity",
      type: { en: "3D graphic adventure", es: "Aventura gráfica 3D" },
      status: { en: "Jam Project", es: "Proyecto de jam" },
      description: {
        en: "A 3D graphic adventure created during a game jam with Vacaflama.",
        es: "Aventura gráfica 3D desarrollada durante una jam con Vacaflama.",
      },
      contributionTags: ["Scripting", "UI Integration"],
      highlights: {
        en: [
          "Implemented most of the project code.",
          "Built dialogue flow, quest tracking and object interactions.",
          "Integrated responsive UI for the playable experience.",
        ],
        es: [
          "Implementé la mayor parte del código del proyecto.",
          "Creé el flujo de diálogos, el seguimiento de misiones y las interacciones con objetos.",
          "Integré UI responsive para la interfaz del juego.",
        ],
      },
      stack: ["Unity", "C#", "UI"],
      links: [{ label: "Itch.io", href: "https://jordanamaya.itch.io/darnos-tiempo" }],
      images: [
        {
          src: "/portfolio/darnos-tiempo/screenshot-1.png",
          alt: { en: "Darnos Tiempo 3D graphic adventure screenshot", es: "Captura de la aventura gráfica 3D Darnos Tiempo" },
        },
        {
          src: "/portfolio/darnos-tiempo/screenshot-2.png",
          alt: { en: "Darnos Tiempo gameplay screenshot", es: "Captura de gameplay de Darnos Tiempo" },
        },
      ],
      publicPortfolioCategory: "independent",
      cardSummary: {
        en: "A compact 3D graphic adventure produced during a game jam.",
        es: "Una aventura gráfica 3D de formato compacto creada durante una game jam.",
      },
      roleSummary: {
        en: "Implemented most of the Unity code for dialogue, quests, interaction and responsive UI during a compact game jam production.",
        es: "Implementé la mayor parte del código Unity de diálogos, misiones, interacción y UI responsive durante una producción de game jam.",
      },
      thumbLabel: "DT",
      visualTone: "green",
    },
    {
      id: "procedural-levels",
      title: "Procedural Level Generation",
      year: "2024",
      context: { en: "Bachelor thesis", es: "Trabajo de Fin de Grado" },
      teamOrClient: "Universidad Rey Juan Carlos",
      engine: "Unity",
      type: { en: "University technical project", es: "Proyecto técnico universitario" },
      status: { en: "Academic work", es: "Trabajo académico" },
      description: {
        en: "Final degree project centered on procedural level generation using Wave Function Collapse.",
        es: "Trabajo de Fin de Grado centrado en generación procedural de niveles usando Wave Function Collapse.",
      },
      contributionTags: ["Algorithms", "Tools", "Code"],
      highlights: {
        en: [
          "Research and implementation of generation constraints.",
          "Evaluation of generated layouts and design usefulness.",
          "Technical documentation and final presentation.",
        ],
        es: [
          "Investigación e implementación de restricciones de generación.",
          "Evaluación de layouts generados y utilidad de diseño.",
          "Documentación técnica y defensa final.",
        ],
      },
      stack: ["Unity", "C#", "WFC"],
      links: [{ label: "GitHub", href: "https://github.com/JAAmaya" }],
      publicPortfolioCategory: "technical",
      hiddenFromPortfolio: true,
      roleSummary: {
        en: "Researched and implemented procedural level generation constraints using Wave Function Collapse for a bachelor thesis project.",
        es: "Investigué e implementé restricciones de generación procedural de niveles con Wave Function Collapse para un Trabajo de Fin de Grado.",
      },
      thumbLabel: "WFC",
      visualTone: "violet",
    },
    {
      id: "graphics-experiments",
      title: "Graphics Experiments",
      year: "2025 - 2026",
      context: { en: "Technical practice", es: "Práctica técnica" },
      teamOrClient: "Universidad Rey Juan Carlos",
      engine: "Graphics / Rendering",
      type: { en: "Shaders and rendering", es: "Shaders y rendering" },
      status: { en: "Research practice", es: "Práctica técnica" },
      description: {
        en: "A growing space for shaders, rendering experiments, and small technical prototypes.",
        es: "Un espacio en crecimiento para shaders, experimentos de render y pequeños prototipos técnicos.",
      },
      contributionTags: ["Graphics", "Shaders", "Tools"],
      highlights: {
        en: [
          "Rendering and visual experimentation.",
          "Reusable technical prototypes.",
          "Future home for computer graphics coursework and tests.",
        ],
        es: [
          "Experimentación visual y de rendering.",
          "Prototipos técnicos reutilizables.",
          "Futuro espacio para trabajos y pruebas de informática gráfica.",
        ],
      },
      stack: ["Computer Graphics", "Shaders", "Rendering"],
      links: [{ label: "GitHub", href: "https://github.com/JAAmaya" }],
      publicPortfolioCategory: "technical",
      hiddenFromPortfolio: true,
      roleSummary: {
        en: "Collection space for shader, rendering and small technical prototypes built while developing a computer graphics profile.",
        es: "Espacio de colección para shaders, rendering y pequeños prototipos técnicos desarrollados como parte de mi perfil de informática gráfica.",
      },
      thumbLabel: "GFX",
      visualTone: "pink",
    },
  ],
};

export const allPortfolioProjects = [
  ...portfolioProjects.professional.map((project) => ({ ...project, group: "professional" as const })),
  ...portfolioProjects.personal.map((project) => ({ ...project, group: "personal" as const })),
];

export const detailPortfolioProjects = allPortfolioProjects.filter((project) => project.detailEnabled && project.detailSlug);

export const team: Localized<{
  eyebrow: string;
  title: string;
  description: string;
  facts: Array<{ label: string; value: string }>;
  note: string;
}> = {
  en: {
    eyebrow: "Team",
    title: "Vacaflama",
    description:
      "Vacaflama is the team behind Sun Burn Nitro. I work as CTO, focusing on technical direction, implementation strategy, and keeping production decisions grounded.",
    facts: [
      { label: "Role", value: "CTO" },
      { label: "Program", value: "Madrid in Game - Start IN Up incubation program" },
      { label: "Current project", value: "Sun Burn Nitro" },
    ],
    note: "The public team website is not available yet. A link will be added when it exists.",
  },
  es: {
    eyebrow: "Equipo",
    title: "Vacaflama",
    description:
      "Vacaflama es el equipo detrás de Sun Burn Nitro. Trabajo como CTO, con foco en dirección técnica, estrategia de implementación y decisiones de producción bien aterrizadas.",
    facts: [
      { label: "Rol", value: "CTO" },
      { label: "Programa", value: "Madrid in Game - programa de incubación Start IN Up" },
      { label: "Proyecto actual", value: "Sun Burn Nitro" },
    ],
    note: "La web pública del equipo todavía no existe. Se añadirá un enlace cuando esté disponible.",
  },
};

export const blog = {
  tags: ["Gamedev", "UI/UX", "College", "Code", "Computer Graphics", "Game Design"],
  content: {
    en: {
      eyebrow: "Blog",
      title: "Notes, ideas, and technical writing.",
      description:
        "A space for posts about whatever is useful to write down: gamedev, code, UI/UX, college work, computer graphics, game design, and notes from projects or games.",
      emptyTitle: "No posts yet",
    },
    es: {
      eyebrow: "Blog",
      title: "Notas, ideas y escritura técnica.",
      description:
        "Un espacio para publicar sobre lo que tenga sentido dejar por escrito: gamedev, código, UI/UX, universidad, informática gráfica, diseño de juegos y notas de proyectos o juegos.",
      emptyTitle: "Todavía no hay publicaciones",
    },
  } satisfies Localized<{
    eyebrow: string;
    title: string;
    description: string;
    emptyTitle: string;
  }>,
};

export type BlogPost = {
  slug: string;
  lang: Lang;
  title: string;
  date: string;
  description: string;
  tags: Array<(typeof blog.tags)[number]>;
};

export const blogPosts: BlogPost[] = [];
export const labels: Localized<{
  contact: string;
  emailMe: string;
  portfolioIntro: string;
  cvTitle: string;
  experience: string;
  education: string;
  skills: string;
  languages: string;
  selectedProjects: string;
}> = {
  en: {
    contact: "Contact",
    emailMe: "Email me",
    portfolioIntro:
      "I have developed games, VR applications, and technical demos where my work spans scripting, netcode, UI integration, internal tools, game design, asset integration, and release tasks across different production contexts.",
    cvTitle: "",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    selectedProjects: "Projects",
  },
  es: {
    contact: "Contacto",
    emailMe: "Escríbeme",
    portfolioIntro:
      "He desarrollado videojuegos, aplicaciones VR y demos técnicas donde mis contribuciones van desde scripting, netcode, interfaces y herramientas internas hasta diseño de juego, integración de assets y publicación en distintas plataformas.",
    cvTitle: "",
    experience: "Experiencia",
    education: "Educación",
    skills: "Habilidades",
    languages: "Idiomas",
    selectedProjects: "Proyectos",
  },
};
