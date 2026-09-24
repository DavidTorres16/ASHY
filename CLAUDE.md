## Design system
Antes de escribir CSS, HTML o cualquier componente de UI, lee
`design-system/README.md` y `design-system/tokens.json`. Usa siempre esos
valores exactos — nunca inventes ni aproximes colores o tipografía:

- Color primario: #141414 (ink) · Color secundario: #f4efde (cream)
- Tipografía display: Thocant · Tipografía de cuerpo: Acumin Variable Concept
- Logo: usar los archivos en `design-system/assets/logo/svg/` tal cual, nunca
  recolorear, distorsionar ni reposicionar el ícono respecto al wordmark.

## Portafolio
Los trabajos van separados por disciplina ("juntos pero no revueltos"): diseño gráfico, 3D e
ilustración, cada una en su sección con la misma plantilla. Se cargan desde
`src/works/works.js` + `src/works/images/<disciplina>/`; no escribas trabajos a mano en
`index.html`. Guía en `src/works/README.md`.
