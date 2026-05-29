# Portfolio

Base limpia para construir un portfolio personal con Astro, TypeScript y Tailwind CSS, preparada para desplegar en GitHub Pages.

## Requisitos

- Node.js 24 o superior.
- npm.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Estructura

- `src/pages/index.astro`: landing principal del portfolio.
- `src/layouts/BaseLayout.astro`: layout global con metadatos.
- `src/components/`: secciones reutilizables.
- `src/data/portfolio.ts`: contenido editable de skills, credenciales, proyectos y contacto.
- `src/styles/global.css`: Tailwind y estilos base.
- `.github/workflows/deploy.yml`: despliegue automatico a GitHub Pages desde `main`.

## Personalizacion inicial

Edita `src/data/portfolio.ts` para sustituir placeholders por tu contenido real, enlaces, proyectos y forma de contacto.
