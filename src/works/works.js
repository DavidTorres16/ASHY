// Trabajos del portafolio, separados por disciplina. Instrucciones en src/works/README.md.
//
// Cada trabajo:
//   {
//     title: 'Nombre del proyecto',          // obligatorio
//     image: 'nombre-del-archivo.jpg',       // obligatorio, dentro de images/<id de la disciplina>/
//     alt: 'Qué se ve en la imagen',         // obligatorio, para lectores de pantalla
//     year: 2026,                            // opcional
//     client: 'Cliente',                     // opcional
//     link: 'https://www.behance.net/...',   // opcional, abre el proyecto completo
//     featured: true,                        // opcional, lo muestra en "Trabajo destacado"
//   },
//
// El primer trabajo de cada disciplina es la pieza principal: se muestra más grande
// y también aparece en la tarjeta de esa disciplina en la portada.
//
// "Trabajo destacado" mezcla las tres disciplinas: muestra hasta 3 trabajos con
// featured: true, en el orden de este archivo.

export const disciplines = [
  {
    id: 'diseno-grafico',
    name: 'Diseño gráfico',
    shortName: 'Gráfico',
    description: 'Identidad visual, piezas gráficas y comunicación de marca.',
    works: [],
  },
  {
    id: 'diseno-3d',
    name: 'Diseño 3D',
    shortName: '3D',
    description: 'Personajes y escenas modelados en 3D.',
    works: [],
  },
  {
    id: 'ilustracion',
    name: 'Ilustración',
    shortName: 'Ilustración',
    description: 'Personajes e ilustraciones con estilo propio.',
    works: [],
  },
];
