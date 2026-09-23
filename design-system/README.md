# Ashy — Sistema de Diseño

Marca personal de **Ashley Taborda** — Diseñadora Visual Digital, Artista 3D e Ilustradora (@Ashy).

Este sistema se construyó a partir del *Manual de Identidad* (PDF, 29 páginas) y del archivo de recursos vectoriales (`Recursos_Página_Ashy.svg`) que la propia marca entregó. Todo lo que sigue son valores y assets reales de esos documentos, no interpretaciones.

---

## 1. Fundamentos de contenido

**Esencia.** Diseñadora visual cuya esencia se define por la creatividad, el compromiso y la búsqueda constante de crecimiento, enfocada en la creación de personajes 3D e ilustración. La marca transmite autenticidad y sensibilidad, generando conexión con las personas. Proyecta innovación y un estilo propio que transforma ideas en experiencias visuales únicas.

**Propósito.** Ser percibida como una marca creativa, auténtica y cercana que inspira y transforma a través del arte, generar confianza y convertir ideas en experiencias visuales memorables.

**Tono de voz.** *Creativo e innovador* — proyecta frescura y originalidad. *Comprometido y auténtico* — transmite confianza y propósito.

**Arquetipos.**
- **El Creador** — busca innovar, expresar originalidad y transformar ideas en obras únicas.
- **El Cuidador** — actúa con compromiso, refleja el propósito de transmitir sensibilidad a través del arte.

**Valores y atributos.**
- **Innovación** — cada creación busca ir más allá de lo convencional, explorando nuevas formas de expresión artística.
- **Autenticidad** — la marca refleja una esencia genuina, transmitiendo originalidad y verdad en cada proyecto.
- **Compromiso** — existe una responsabilidad activa con las personas y el entorno, generando impacto positivo a través del arte.

**El nombre.** "Ashy" es una abstracción de "Ashley", creado para transmitir cercanía, autenticidad y recordación. Su sencillez lo convierte en un nombre versátil y fácil de identificar, manteniendo un vínculo directo con la identidad personal de la creadora.

**El símbolo: el gato.** El gato representa versatilidad, agilidad e independencia, cualidades que transmiten adaptación y movimiento constante. También simboliza intuición, misterio y elegancia, proyectando una identidad creativa y auténtica. En la marca Ashy refuerza la idea de transformación y originalidad. El gato en el logo refleja a la propia creadora y su esencia artística: la imaginación que da vida a personajes e ilustraciones únicas.

---

## 2. Fundamentos visuales

### Color

Dos colores de marca — ver `tokens.json` para valores exactos (hex, RGB, CMYK, Pantone):

- **`ink`** `#141414` — color primario. Aporta seriedad y equilibrio, contrarrestando el carácter animado del logo; refuerza la autenticidad y solidez de la marca sin perder creatividad.
- **`cream`** `#f4efde` — color secundario. Aporta calidez, equilibrio y suavidad; funciona como complemento que genera cercanía y armonía visual.
- **`gold`** `#efe2c4` — la tinta real del logo en su versión clara según el archivo vectorial de recursos. Ojo: el logo claro **no** es #f4efde; #f4efde es el color de fondo claro.
- **`charcoal`** `#3c3c37` — color de los ornamentos tipo bigote.

**Regla de uso incorrecto documentada en el manual:** nunca aplicar al logo un color distinto a `ink` o `cream` (el manual muestra explícitamente un ejemplo en verde marcado como error).

### Tipografía

- **Display — `Thocant`**: tipografía palo seco, geométrica y moderna, de trazos gruesos y formas redondeadas que transmiten solidez y cercanía. Combina simplicidad con un aire contemporáneo. En la marca Ashy refuerza la autenticidad, creatividad y la conexión directa con las personas. Se usa en los títulos grandes de cada sección del manual.
- **Cuerpo — `Acumin Variable Concept`**: usada en dos pesos — *Bold (700)* para énfasis y datos técnicos, *WideExtraLight (200, ancho 115)* para párrafos de cuerpo.

⚠️ **Pendiente:** el manual entregado no incluye los archivos de fuente (`.otf`/`.woff`), solo los nombres. `tokens.json` referencia `Thocant` y `Acumin Variable Concept` con fallbacks de sistema; para que el sistema los renderice de forma nativa hay que añadir los archivos reales en `fonts/` y listarlos en `type.fonts[]`.

### El logo (imagotipo)

La marca Ashy está conformada por un **imagotipo** compuesto por un ícono (la cara del gato) y el nombre ("ASHY" en lettering custom, distinto de Thocant). Ambos elementos pueden funcionar juntos o de manera independiente — ver grupo de assets **Logo** más abajo.

**Variantes disponibles** (grupo de assets **Logo**, todas en SVG vectorial extraído directamente de `Recursos_Página_Ashy.svg`):
| Archivo | Descripción |
|---|---|
| `logo-lockup-black.svg` | Imagotipo completo (ícono + wordmark) en `ink` — para fondos claros |
| `logo-lockup-cream.svg` | Imagotipo completo en `gold` — para fondos oscuros |
| `icon-black.svg` | Solo el ícono (cara del gato) en `ink` |
| `icon-cream.svg` | Solo el ícono en `gold` |
| `wordmark-black.svg` | Solo el wordmark "ASHY" en `ink` |
| `wordmark-cream.svg` | Solo el wordmark en `gold` |

**Usos incorrectos (documentados explícitamente en el manual — página "Usos incorrectos"):**
1. No distorsionar el imagotipo.
2. No mover ni reposicionar sus elementos (ícono/wordmark) de forma independiente.
3. No cambiar la posición relativa entre ícono y wordmark.
4. No cambiar la tipografía del wordmark.
5. No aplicar colores distintos a los de marca: `ink` para la versión oscura y `gold` (#efe2c4) para la versión clara, como vienen en los archivos.
6. No exagerar proporciones ni cambiar el tamaño de forma desigual entre elementos.

### Aplicaciones de marca (referencia)

El manual muestra el imagotipo aplicado en: cuaderno con cubierta en `ink` y logo en `cream` en relieve, sticker circular (solo ícono), tarjetas de presentación ("Diseñadora Visual Digital · Artista 3D · Ilustradora", @Ashy) y papelería/contrato con membrete. Todas mantienen la paleta de dos colores sin excepción.

---

## 3. Iconografía y ornamentos

Además del ícono principal, el archivo de recursos trae un ornamento recurrente: pares de **bigotes** (cápsulas redondeadas en `charcoal`, inclinadas ~9° y ~12°), un guiño a los bigotes del gato. Están en el grupo de assets **Ornamentos**:

| Archivo | Descripción |
|---|---|
| `whiskers-pair-left.svg` / `whiskers-pair-right.svg` | Par completo de bigotes, en espejo, para flanquear un elemento por ambos lados |
| `whiskers-edge-left.svg` / `whiskers-edge-right.svg` | Par de borde: cortado recto para pegarse al filo izquierdo o derecho de una composición (así aparece en la página "El gato" del manual). En el archivo fuente va al 20% de opacidad |

Úsalos como acento puntual, siempre en pares y en espejo; nunca como patrón denso ni como sustituto del ícono.

## 4. Ejemplo de uso correcto

- Sobre fondo `ink`: imagotipo o ícono en su versión clara (`gold`, archivos `*-cream.svg`).
- Sobre fondo `cream`: imagotipo o ícono en `ink`.
- Títulos de sección en `Thocant` (display); cuerpo de texto en `Acumin Variable Concept`.
- Mantener siempre la relación de tamaño y posición entre ícono y wordmark tal como se entrega en `logo-lockup-cream.svg` / `logo-lockup-black.svg`.

---

## Notas de origen

- Fuente: `MARCA_PERSONAL_ASHY_A-1.pdf` (Manual de Identidad, Adobe Illustrator, 29 páginas) y `Recursos_Página_Ashy.svg`, ambos entregados por la usuaria.
- Todos los assets son SVG vectoriales separados directamente de `Recursos_Página_Ashy.svg`, con sus trazados y colores originales intactos; sirven para producción. El paquete descargable incluye además versiones PNG transparentes.
- Colores y valores (hex/RGB/CMYK/Pantone) copiados exactamente como aparecen en el manual, sin redondear ni reinterpretar.
