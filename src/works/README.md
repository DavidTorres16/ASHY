# Cómo subir trabajos

La landing muestra tres disciplinas por separado: **Diseño gráfico**, **Diseño 3D** e
**Ilustración**. Todas usan la misma plantilla; solo cambia el contenido.

## 1. Guarda la imagen en la carpeta de su disciplina

```
src/works/images/diseno-grafico/
src/works/images/diseno-3d/
src/works/images/ilustracion/
```

- Formatos: `.jpg`, `.png`, `.webp` o `.avif`.
- Tamaño recomendado: 1600 px en el lado largo y menos de 500 KB (WebP o JPG).
- Nombre del archivo en minúsculas, sin espacios ni tildes: `identidad-cafe-luna.jpg`.
- Las tarjetas son cuadradas (la principal es más grande), así que deja el motivo centrado.

## 2. Añádela en `src/works/works.js`

Dentro de `works: [ ... ]` de la disciplina correspondiente:

```js
{
  title: 'Identidad Café Luna',
  image: 'identidad-cafe-luna.jpg',
  alt: 'Logotipo de Café Luna aplicado en vasos y bolsas',
  year: 2026,
  client: 'Café Luna',
  link: 'https://www.behance.net/...',
  featured: true,
},
```

- `title`, `image` y `alt` son obligatorios. `year`, `client`, `link` y `featured` son opcionales.
- `featured: true` lo muestra también en **Trabajo destacado**, la sección que mezcla las tres
  disciplinas en tarjetas inclinadas (máximo 3 en total, en el orden del archivo).
- **El orden importa:** el primer trabajo de la lista es la pieza principal. Se ve más grande
  en su sección y aparece en la tarjeta de esa disciplina en la portada.
- **La composición se arma sola según la cantidad:** cada sección siempre cierra un bloque
  completo, sin imágenes sueltas en una fila. De 1 a 6 trabajos hay una composición distinta para
  cada número (con 1 trabajo lo acompaña una tarjeta de "Más proyectos en camino"); con más de 6
  se encadenan bloques de 3 a 6 que alternan el lado de la pieza grande. En celular, la principal
  ocupa todo el ancho y el resto va en pares.
- Mientras una disciplina no tenga trabajos, muestra skeletons y "Próximamente".
- El nombre y la descripción de cada disciplina también se editan en ese archivo.

## 3. Revisa y publica

```bash
npm run dev    # revisa en http://localhost:5173
```

Si el nombre de la imagen no coincide con el archivo, la consola del navegador lo avisa y ese
trabajo no se muestra. Al subir los cambios a `main`, el sitio se publica solo.
