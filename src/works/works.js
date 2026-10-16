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
    // Assets de prueba entregados para exponer el portafolio; títulos provisionales.
    works: [
      {
        title: 'Latrodectus mactans',
        image: 'latrodectus-mactans.webp',
        alt: 'Criatura 3D mitad mujer y mitad araña viuda negra, de piel rojiza y seis patas, sobre fondo oscuro con telarañas',
        featured: true,
      },
      {
        title: 'La chica del gato',
        image: 'chica-del-gato.webp',
        alt: 'Personaje 3D de cabello largo bicolor que sostiene un gato negro de ojos ámbar',
        featured: true,
      },
      {
        title: 'Retrato élfico',
        image: 'retrato-elfico.webp',
        alt: 'Busto 3D de una chica de orejas puntiagudas, cabello negro largo y ojos azules',
      },
      {
        title: 'Zoro (fan art)',
        image: 'zoro-fan-art.webp',
        alt: 'Personaje 3D de cabello verde y torso descubierto, con faja morada, falda blanca y tres katanas',
        featured: true,
      },
    ],
  },
  {
    id: 'ilustracion',
    name: 'Ilustración',
    shortName: 'Ilustración',
    description: 'Personajes e ilustraciones con estilo propio.',
    works: [],
  },
];
