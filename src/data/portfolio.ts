export const profile = {
  name: "Jordan Amaya",
  role: "Desarrollador de Videojuegos / Unity",
  headline: "Desarrollo videojuegos, experiencias VR y aplicaciones interactivas con Unity.",
  summary:
    "Me especializo en programacion con Unity, especialmente en gameplay, UI/UX, realidad virtual y publicacion multiplataforma. Disfruto leyendo documentacion, aprendiendo nuevas tecnologias y resolviendo problemas tecnicos dentro de equipos creativos.",
  location: "Madrid, Espana",
  availability: "Desarrollador Unity abierto a oportunidades",
  email: "jaamayac1@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/JAAmaya" },
    { label: "Itch.io", href: "https://jordanamaya.itch.io" },
    { label: "Linktree", href: "https://linktr.ee/jordanamaya" },
  ],
};

export const navigation = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Skills", href: "/#skills" },
  { label: "Educacion", href: "/#educacion" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/#contacto" },
];

export const skills = [
  "Unity 2D",
  "Unity 3D",
  "Unity VR",
  "C#",
  "Computer Graphics",
  "Realidad Virtual",
  "UI/UX",
  "Testing y bugfixing",
  "WebGL",
  "Android",
];

export const credentials = [
  {
    label: "Gameplay",
    value: "Logica de juego, sistemas de guardado, dialogos, niveles e interaccion.",
  },
  {
    label: "VR y 3D",
    value: "Aplicaciones educativas en realidad virtual, niveles e integracion de modelos 3D.",
  },
  {
    label: "Publicacion",
    value: "Builds para WebGL, Android, Itch.io y Play Store con pruebas y depuracion.",
  },
];

export const education = [
  {
    title: "Master's Degree in Computer Graphics, Games and Virtual Reality",
    institution: "Universidad Rey Juan Carlos",
    period: "Oct 2025 - Jun 2026",
    description:
      "Formacion especializada en graficos por computadora, videojuegos y realidad virtual.",
    highlights: ["Computer Graphics", "Games", "Virtual Reality"],
  },
  {
    title: "Grado en Diseno y Desarrollo de Videojuegos",
    institution: "Universidad Rey Juan Carlos",
    period: "Sep 2019 - May 2024",
    description:
      "Trabajo de Fin de Grado centrado en generacion procedural de niveles usando Wave Function Collapse.",
    highlights: ["Unity", "Game Design", "Procedural Generation"],
  },
];

export const projects = [
  {
    title: "El Gran Teatro del Mundo: El Juego",
    type: "Aventura grafica 2D",
    description:
      "Aventura grafica 2D desarrollada para reinterpretar una obra clasica del siglo XVII. Trabajo en logica de juego, guardado, dialogos, niveles, UI/UX, testing y publicacion.",
    stack: ["Unity", "C#", "WebGL", "Android"],
    href: "https://jordanamaya.itch.io",
    platform: "Itch.io / Play Store",
    status: "Publicado",
  },
  {
    title: "VIRION VR",
    type: "Aplicaciones VR educativas",
    description:
      "Cuatro aplicaciones de realidad virtual para un proyecto paneuropeo financiado por Erasmus+ orientado al uso de VR en materias STEM.",
    stack: ["Unity VR", "C#", "UI/UX", "3D"],
    href: "https://virion-project.eu",
    platform: "VR",
    status: "Proyecto profesional",
  },
  {
    title: "Prototipos y juegos independientes",
    type: "Portfolio Itch.io",
    description:
      "Coleccion de proyectos personales e iteraciones jugables para experimentar con mecanicas, interfaces y publicacion web.",
    stack: ["Unity", "C#", "Game Design"],
    href: "https://jordanamaya.itch.io",
    platform: "Itch.io",
    status: "En crecimiento",
  },
];

export const experience = [
  {
    role: "Desarrollador Unity",
    company: "Desarrollo independiente para la Compania Nacional de Teatro Clasico",
    period: "Jun 2024 - Presente",
    description:
      "Desarrollo de una aventura grafica 2D con soporte para WebGL y Android, incluyendo sistemas de juego, UI/UX, pruebas y publicacion.",
  },
  {
    role: "Desarrollador VR en Unity",
    company: "Premium Cine, Departamento VR",
    period: "Oct 2023 - May 2024",
    description:
      "Desarrollo de aplicaciones VR educativas para VIRION: logica de juego, localizacion en 5 idiomas, niveles, integracion 3D y correccion de errores.",
  },
];
