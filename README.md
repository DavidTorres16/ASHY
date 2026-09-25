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
- `src/works/`: trabajos del portafolio por disciplina (diseño gráfico, 3D, ilustración).
  Para subir uno, ver [`src/works/README.md`](src/works/README.md).
- `design-system/`: tokens, libro de marca y assets (logo y ornamentos) que usa la página.

## Flujo de ramas y publicación (GitHub Pages)

| Rama | Para qué | URL |
|---|---|---|
| `main` | Versión oficial | https://davidtorres16.github.io/ASHY/ |
| `develop` | Vista previa de cambios (no se indexa en buscadores) | https://davidtorres16.github.io/ASHY/develop/ |

1. Los cambios nuevos se hacen en una rama aparte y entran a `develop` por pull request.
2. Se revisan en la URL de `develop`.
3. Cuando están aprobados, un pull request de `develop` a `main` los vuelve oficiales.

`.github/workflows/deploy-pages.yml` se ejecuta en cada push a `main` o `develop` (o a mano desde
Actions). Como GitHub Pages admite un solo sitio por repositorio, cada ejecución compila las dos
ramas y publica ambas juntas: un cambio en `develop` nunca altera la versión oficial.

Configuración necesaria en GitHub (una sola vez):
- Settings → Pages → Build and deployment: **Source: GitHub Actions**.
- Settings → Environments → `github-pages` → Deployment branches and tags: permitir `main` y `develop`.

## Pendientes

- Trabajos: ninguna disciplina tiene trabajos todavía, así que se ven skeletons. Se suben en `src/works/`.
- Descripciones de cada disciplina en `src/works/works.js`: son una propuesta, confirmar con Ashley.
- Correo de contacto: el botón "Escríbeme" tiene un `mailto:` vacío.
- Fuentes Thocant y Acumin Variable Concept: mientras no estén en `design-system/fonts/`, se usan Fredoka y Archivo como sustitutas.
