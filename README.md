# ASHY
Repositorio dedicado a la marca ASHY: portafolio de Ashley Taborda (@Ashy).

## Desarrollo

```bash
npm install
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera dist/ (lo que se publica)
npm run preview  # sirve dist/ en http://localhost:4173
```

Abrir `index.html` con doble clic muestra la página con estilos, pero sin fuentes de marca,
animaciones ni el ícono del botón de tema: el navegador no ejecuta módulos JavaScript desde
`file://`. Para verla completa hay que usar `npm run dev` o publicar `dist/`.

- `index.html`, `src/styles.css`, `src/main.js`: la landing.
- `design-system/`: tokens, libro de marca y assets (logo y ornamentos) que usa la página.

## Publicación (GitHub Pages)

`.github/workflows/deploy-pages.yml` compila el sitio y publica `dist/` en cada push a `main`
(también se puede lanzar a mano desde la pestaña Actions). URL: https://davidtorres16.github.io/ASHY/

Requisito único: en Settings → Pages → Build and deployment, elegir **Source: GitHub Actions**.

## Pendientes

- Imágenes de los proyectos: hoy la página muestra skeletons marcados con `TODO` en `index.html`.
- Correo de contacto: el botón "Escríbeme" tiene un `mailto:` vacío.
- Fuentes Thocant y Acumin Variable Concept: mientras no estén en `design-system/fonts/`, se usan Fredoka y Archivo como sustitutas.
