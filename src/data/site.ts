export type Lang = "en" | "es";

type Localized<T> = Record<Lang, T>;

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
  games: { en: "/games", es: "/es/juegos" },
} satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routeMap;

export const navItems: Localized<Array<{ key: RouteKey; label: string }>> = {
  en: [
    { key: "home", label: "Home" },
    { key: "portfolio", label: "Portfolio" },
    { key: "cv", label: "CV" },
    { key: "team", label: "Team" },
    { key: "blog", label: "Blog" },
    { key: "games", label: "Games" },
  ],
  es: [
    { key: "home", label: "Inicio" },
    { key: "portfolio", label: "Portfolio" },
    { key: "cv", label: "CV" },
    { key: "team", label: "Equipo" },
    { key: "blog", label: "Blog" },
    { key: "games", label: "Juegos" },
  ],
};

export const profile = {
  name: "Jordan Amaya",
  email: "jaamayac1@gmail.com",
  location: { en: "Madrid, Spain", es: "Madrid, España" },
  links: [
    { label: "GitHub", href: "https://github.com/JAAmaya" },
    { label: "Itch.io", href: "https://jordanamaya.itch.io" },
    { label: "Linktree", href: "https://linktr.ee/jordanamaya" },
  ],
};

export const home: Localized<{
  eyebrow: string;
  title: string;
  summary: string;
  primaryCta: string;
  secondaryCta: string;
  cards: Array<{ key: RouteKey; title: string; description: string }>;
}> = {
  en: {
    eyebrow: "Unity developer and game designer",
    title: "I build games, VR experiences, and interactive systems with Unity.",
    summary:
      "Personal website and portfolio for my professional work, technical notes, game design thoughts, and the projects I build with teams and on my own.",
    primaryCta: "View portfolio",
    secondaryCta: "Read CV",
    cards: [
      {
        key: "portfolio",
        title: "Portfolio",
        description: "Professional and personal projects with contribution notes, links, and media placeholders.",
      },
      {
        key: "cv",
        title: "CV",
        description: "Experience, education, skills, languages, and the work I want to keep visible.",
      },
      {
        key: "blog",
        title: "Development blog",
        description: "A future space for technical notes, code decisions, postmortems, and recommendations.",
      },
      {
        key: "games",
        title: "Played games",
        description: "A future design notebook for reviews, comparisons, and thoughts as a player and designer.",
      },
    ],
  },
  es: {
    eyebrow: "Desarrollador Unity y diseñador de videojuegos",
    title: "Desarrollo videojuegos, experiencias VR y sistemas interactivos con Unity.",
    summary:
      "Web personal y portfolio para reunir mi trabajo profesional, notas técnicas, ideas de diseño de juegos y proyectos propios o en equipo.",
    primaryCta: "Ver portfolio",
    secondaryCta: "Leer CV",
    cards: [
      {
        key: "portfolio",
        title: "Portfolio",
        description: "Proyectos profesionales y personales con contribución, enlaces y placeholders visuales.",
      },
      {
        key: "cv",
        title: "CV",
        description: "Experiencia, educación, habilidades, idiomas y el trabajo que quiero tener visible.",
      },
      {
        key: "blog",
        title: "Blog de desarrollo",
        description: "Un espacio futuro para notas técnicas, decisiones de código, postmortems y recomendaciones.",
      },
      {
        key: "games",
        title: "Juegos jugados",
        description: "Un futuro cuaderno de diseño con reseñas, comparativas e ideas como jugador y diseñador.",
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
        description:
          "Unity developer at Vacaflama Studio, working across gameplay systems, UI, tooling, publishing, and technical foundations for team projects. Published El Gran Teatro del Mundo: El Videojuego for WebGL and Android, and currently contributes to SUN BURN NITRO as part of the studio's technical team.",
        links: [{ label: "El Gran Teatro del Mundo", href: "/portfolio#professional-gran-teatro" }],
      },
      {
        role: "VR Unity Developer",
        company: "Premium Cine, VR Department",
        period: "Oct 2023 - May 2024",
        description:
          "Four virtual reality applications for VIRION, a pan-European Erasmus+ project exploring VR as an educational tool for STEM subjects.",
        links: [{ label: "VIRION Project", href: "/portfolio#professional-virion" }],
      },
    ],
    es: [
      {
        role: "Desarrollador Unity",
        company: "Vacaflama Studio",
        period: "Jun 2024 - Presente",
        description:
          "Desarrollador Unity en Vacaflama Studio, trabajando en sistemas de gameplay, UI, herramientas, publicación y bases técnicas para proyectos del equipo. Publiqué El Gran Teatro del Mundo: El Videojuego para WebGL y Android, y actualmente contribuyo a SUN BURN NITRO dentro del equipo técnico del estudio.",
        links: [{ label: "El Gran Teatro del Mundo", href: "/es/portfolio#professional-gran-teatro" }],
      },
      {
        role: "Desarrollador VR en Unity",
        company: "Premium Cine, Departamento VR",
        period: "Oct 2023 - May 2024",
        description:
          "Cuatro aplicaciones de realidad virtual para VIRION, un proyecto paneuropeo financiado por Erasmus+ que explora el uso de VR como herramienta educativa en materias STEM.",
        links: [{ label: "VIRION Project", href: "/es/portfolio#professional-virion" }],
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
  thumbLabel: string;
  visualTone: "blue" | "amber" | "green" | "pink" | "violet" | "red";
};

export const portfolioProjects: Record<"professional" | "personal", Project[]> = {
  professional: [
    {
      id: "virion",
      title: "VIRION Project",
      year: "2024",
      context: { en: "Professional work", es: "Trabajo profesional" },
      teamOrClient: "Premium Cine, VR Department",
      engine: "Unity VR",
      type: { en: "Educational VR applications", es: "Aplicaciones VR educativas" },
      status: { en: "Professional work", es: "Trabajo profesional" },
      description: {
        en: "Four virtual reality applications for VIRION, a pan-European Erasmus+ project exploring VR as an educational tool for STEM subjects.",
        es: "Cuatro aplicaciones de realidad virtual para VIRION, un proyecto paneuropeo financiado por Erasmus+ que explora el uso de VR como herramienta educativa en materias STEM.",
      },
      contributionTags: ["Scripting", "Gameplay", "Asset Integration", "Localization Support"],
      highlights: {
        en: [
          "Implemented interaction systems and gameplay logic across the applications.",
          "Integrated assets and supported localization-ready content.",
          "Learned professional Unity production practices, documentation habits, and solution evaluation.",
        ],
        es: [
          "Implementé sistemas de interacción y lógica de gameplay en las aplicaciones.",
          "Integré assets y preparé contenido con soporte para localización.",
          "Consolidé buenas prácticas profesionales de producción, documentación y evaluación de soluciones en Unity.",
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
      status: { en: "Published", es: "Publicado" },
      description: {
        en: "A 2D graphic adventure commissioned by Compañía Nacional de Teatro Clásico, reinterpreting the stage play El Gran Teatro del Mundo.",
        es: "Aventura gráfica 2D desarrollada por encargo de la Compañía Nacional de Teatro Clásico, reinterpretando la obra teatral El Gran Teatro del Mundo.",
      },
      contributionTags: ["Scripting", "Publishing", "UI", "Asset Integration", "Tooling"],
      highlights: {
        en: [
          "Led the technical side and implemented the full codebase.",
          "Built save, screen flow, dialogue, puzzle, interaction, and internal tooling systems.",
          "Integrated art, UI, and animations while preserving pixel-art fidelity across screen formats.",
          "Handled publication for Itch.io WebGL and Play Store.",
        ],
        es: [
          "Lideré el apartado técnico e implementé la totalidad del código.",
          "Creé sistemas de guardado, flujo de pantallas, diálogos, puzles, interacción y herramientas internas.",
          "Integré arte, UI y animaciones cuidando la fidelidad del pixel art en distintos formatos de pantalla.",
          "Me encargué de la publicación en Itch.io WebGL y Play Store.",
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
        en: "A frantic arcade racing game with unique characters and abilities, currently in development at Vacaflama.",
        es: "Juego arcade de carreras frenéticas con personajes y habilidades únicas, actualmente en desarrollo en Vacaflama.",
      },
      contributionTags: ["Scripting", "Netcode", "Gameplay Systems"],
      highlights: {
        en: [
          "Working on gameplay scripting and technical foundations.",
          "Developing netcode-facing systems for competitive races.",
          "Preparing the project for a future public team/game page.",
        ],
        es: [
          "Trabajo en scripting de gameplay y bases técnicas del proyecto.",
          "Desarrollo de sistemas orientados a netcode para carreras competitivas.",
          "Preparación del proyecto para una futura página pública del equipo o del juego.",
        ],
      },
      stack: ["Unity", "C#", "Game Design"],
      links: [
        { label: "Drive material", href: "https://drive.google.com/drive/folders/1TJ0oOw-fx6WJXttSTwjsLxaFX2216tYm" },
        { label: "Team website" },
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
        {
          src: "/portfolio/sun-burn-nitro/team-dossier.jpg",
          alt: { en: "Vacaflama team dossier image", es: "Imagen de dossier del equipo Vacaflama" },
        },
      ],
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
      status: { en: "Academic work", es: "Trabajo académico" },
      description: {
        en: "Online multiplayer game about typing duels, cards, and spells. I proposed early game designs and shaped much of the code architecture.",
        es: "Juego multijugador online de duelos de mecanografía con cartas y hechizos. Propuse los primeros diseños de juego y definí gran parte de la arquitectura de código.",
      },
      contributionTags: ["Scripting", "Netcode", "Code Design", "Game Design", "AI-assisted Workflow"],
      highlights: {
        en: [
          "Built modular card, spell, and status-effect systems based on ScriptableObjects.",
          "Implemented netcode for the core gameplay systems.",
          "Separated typing state logic from presentation to support multiple use cases.",
          "Added persistence with different backends for different platforms.",
          "Integrated AI agents into my development workflow for the first time.",
        ],
        es: [
          "Creé sistemas modulares de cartas, hechizos y efectos de estado basados en ScriptableObjects.",
          "Implementé el netcode relacionado con los sistemas principales.",
          "Separé la lógica de estado de escritura de la presentación para soportar distintos casos de uso.",
          "Añadí persistencia con backends distintos según plataforma.",
          "Integré agentes de IA en mi workflow de desarrollo por primera vez.",
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
      status: { en: "Academic work", es: "Trabajo académico" },
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
      status: { en: "Jam project", es: "Proyecto de jam" },
      description: {
        en: "A 3D graphic adventure created during a game jam with Vacaflama.",
        es: "Aventura gráfica 3D desarrollada durante una jam con Vacaflama.",
      },
      contributionTags: ["Scripting", "UI", "Game Design", "Interaction"],
      highlights: {
        en: [
          "Implemented most of the project code.",
          "Built dialogue, quest, and interaction systems.",
          "Integrated responsive UI for the playable experience.",
        ],
        es: [
          "Implementé la mayor parte del código del proyecto.",
          "Creé sistemas de diálogos, misiones e interacción.",
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
      thumbLabel: "GFX",
      visualTone: "pink",
    },
  ],
};

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

export const placeholders: Localized<Record<"blog" | "games", { eyebrow: string; title: string; description: string; points: string[] }>> = {
  en: {
    blog: {
      eyebrow: "Future blog",
      title: "Development notes, code decisions, and postmortems.",
      description:
        "This page will become a place for technical writing: architecture decisions, design tradeoffs, pros and cons, recommendations, and practical lessons from game development.",
      points: ["Code design notes", "Decision logs", "Pros and cons", "Recommendations", "Postmortems"],
    },
    games: {
      eyebrow: "Future game gallery",
      title: "Games played, design notes, and comparisons.",
      description:
        "This page will collect thoughts about games from the perspective of a player and designer, including how different games solve the same design problem.",
      points: ["Design reviews", "Comparative analysis", "Favorite games", "Why games resonate", "Valorant notes"],
    },
  },
  es: {
    blog: {
      eyebrow: "Blog futuro",
      title: "Notas de desarrollo, decisiones de código y postmortems.",
      description:
        "Esta página será un espacio para escritura técnica: decisiones de arquitectura, tradeoffs de diseño, pros y contras, recomendaciones y aprendizajes prácticos de desarrollo de videojuegos.",
      points: ["Notas de diseño de código", "Decisiones técnicas", "Pros y contras", "Recomendaciones", "Postmortems"],
    },
    games: {
      eyebrow: "Galería futura de juegos",
      title: "Juegos jugados, notas de diseño y comparativas.",
      description:
        "Esta página reunirá ideas sobre juegos desde la perspectiva de jugador y diseñador, incluyendo cómo distintos juegos resuelven un mismo problema de diseño.",
      points: ["Reseñas de diseño", "Análisis comparativo", "Juegos favoritos", "Por qué conectan los juegos", "Notas sobre Valorant"],
    },
  },
};

export const labels: Localized<{
  contact: string;
  emailMe: string;
  portfolioProfessional: string;
  portfolioPersonal: string;
  portfolioIntro: string;
  cvTitle: string;
  cvIntro: string;
  experience: string;
  education: string;
  skills: string;
  languages: string;
  selectedProjects: string;
}> = {
  en: {
    contact: "Contact",
    emailMe: "Email me",
    portfolioProfessional: "Professional Work",
    portfolioPersonal: "Personal Work",
    portfolioIntro:
      "Selected projects presented as visual case studies. Each one focuses on what I contributed, the systems I touched, and where to find more material.",
    cvTitle: "Experience, education, and skills.",
    cvIntro: "A focused CV page for my Unity, VR, game development, and computer graphics background.",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    languages: "Languages",
    selectedProjects: "Selected projects",
  },
  es: {
    contact: "Contacto",
    emailMe: "Escríbeme",
    portfolioProfessional: "Trabajo profesional",
    portfolioPersonal: "Trabajo personal",
    portfolioIntro:
      "Proyectos seleccionados como casos visuales. Cada uno se centra en mi contribución, los sistemas en los que trabajé y dónde encontrar más material.",
    cvTitle: "Experiencia, educación y habilidades.",
    cvIntro: "Una página de CV centrada en mi perfil de Unity, VR, desarrollo de videojuegos e informática gráfica.",
    experience: "Experiencia",
    education: "Educación",
    skills: "Habilidades",
    languages: "Idiomas",
    selectedProjects: "Proyectos seleccionados",
  },
};
