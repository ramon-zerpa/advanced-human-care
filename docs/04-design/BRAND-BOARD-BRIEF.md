# Brand-board — dirección propuesta

Estado: brand-board Direction 01 aprobado por el usuario el 8 de octubre de 2026. Incluye paleta, tipografía, iconos, botones, patrones de formulario, tarjeta de tratamiento, placeholders fotográficos y aplicaciones de escritorio/móvil. Lora se conserva con la posibilidad de reevaluarla más adelante. Primera parte de la página diseñada en Pencil: header, hero y sección de lesiones; pendiente de revisión antes de continuar.

## Concepto

Calma, atención humana y recuperación del movimiento. Una clínica cercana y profesional, con jerarquía editorial clara y un recorrido sencillo hacia la solicitud de cita. El carácter proviene del logo original, el verde profundo, el espacio entre elementos y una composición cuidada.

Logo inmutable: `brand/reference/advanced-human-care-logo-original.png`. Conservar archivo, proporción y colores. Presentarlo sobre blanco; no recolorear, redibujar, generar una variante ni estirarlo. Verificar calidad a tamaño real y solicitar original de mayor resolución si hiciera falta antes de ampliarlo.

## Paleta candidata

| Token | Color | Uso |
|---|---|---|
| Advanced Green | `#009E3B` | Verde original de la palabra Advanced; inicio izquierdo del degradado del topbar |
| Forest | `#174A3A` | CTA principal, titulares destacados, zonas puntuales de contraste |
| Ink | `#25342E` | Texto principal |
| Muted | `#58665E` | Texto secundario |
| Canvas | `#F7F8F4` | Superficies generales claras |
| White | `#FFFFFF` | Logo, formulario y superficies de lectura |
| Sage | `#E4ECE4` | Paneles secundarios y fondos de iconos |
| Gold | `#C89B3C` | Detalles decorativos pequeños vinculados al símbolo del logo |
| Gold ink | `#986D16` | Texto de acento sobre blanco, si resulta necesario |
| Gold soft | `#F3E9D3` | Fondo de los iconos de lesiones, con trazo Gold ink |
| Border | `#CCD7CE` | Divisores decorativos; no usar como único límite de controles |

Los colores del logo siguen intactos y no se sustituyen por estos tokens. El dorado decorativo no se usa para texto pequeño ni como fondo del CTA principal. Formularios y estados requieren contraste funcional propio.

Ajustes solicitados por el usuario: topbar con degradado horizontal Advanced Green → Forest; ubicación sobre una superficie blanca para conservar contraste. Botón telefónico del header Forest/blanco. Llamada secundaria del hero con número visible sobre Gold y texto Ink (5.10:1). Iconos de lesiones Gold ink/Gold soft (3.84:1). En código, animar brevemente el icono telefónico del header al hover/focus (180ms), sin bucle y respetando `prefers-reduced-motion`.

Revisión posterior: la ubicación pierde el fondo blanco. El degradado alcanza `#008432` al 6% del ancho antes de su texto blanco (contraste mínimo en ese tramo 4.83:1). Selector EN/ES añadido, EN activo y targets de 44px. Sombras leves en botones del hero y una sombra aún más tenue en la imagen. Blanco sobre Gold solo da 2.56:1; se conserva texto Ink. Exportaciones actuales en `pencil-design/exports/phase-01-refinement-v3/`.

Revisión vigente: el botón Gold del hero fue rechazado. Acción telefónica secundaria blanca, borde/texto Forest. El dorado se mantiene en los iconos de lesiones. Sombras de botones e imagen ligeramente más fuertes y caption separado 32px de la foto. Animación de entrada coordinada del hero documentada para código, con reduced motion y contenido visible por defecto. Exportaciones actuales en `pencil-design/exports/phase-01-refinement-v4/`.

Última alternativa: llamada del hero blanca con borde, icono y número Gold ink `#986D16` (4.63:1 sobre blanco). El dorado claro queda para detalles decorativos. Exportaciones actuales en `pencil-design/exports/phase-01-refinement-v5/`.

Decisión más reciente del usuario: botón de llamada del hero con fondo Sage y tipografía/icono Forest, como ES en el selector; sin borde dorado. Navegación principal 15px semibold 600, hover pendiente para Astro. Exportaciones acumuladas actuales en `pencil-design/exports/phase-03-refinement-v1/`.

Decisión vigente posterior: botón telefónico del hero simple, sin doble contorno, con fondo Gold soft `#F3E9D3` y tipografía/icono Gold text `#865F14` (4.76:1). La apariencia sigue los iconos de lesiones; el texto requiere un tono dorado ligeramente más oscuro. Muestras actualizadas en `pencil-design/exports/phase-03-refinement-v3/`.

## Tipografía candidata

- Titulares: **Lora Semibold Italic**, aceptada provisionalmente por el usuario, peso 600, line-height **1.10** en titulares grandes y **1.2** en subtítulos pequeños. Primera letra de cada palabra en mayúscula (capitalize), incluidos términos como In y las palabras unidas por guion. Aplicado únicamente a títulos, sin cambiar textos, botones ni navegación. Responde a la petición de una tipografía semejante al lettering serif cursivo del logo; no se afirma que sea su fuente exacta. Noto Sans se mantiene en texto y UI.
- Historial: Figtree e interlineado 1.45 rechazados; Manrope con 1.08 mejoró la propuesta, pero el usuario solicitó explorar una alternativa ligada al logo. Lora aceptada para continuar; se evaluará nuevamente más adelante y no constituye una aprobación definitiva de toda la dirección visual.
- Texto/UI: **Noto Sans**, pesos 400 y 600. Lectura cómoda y continuidad futura EN/ES.
- Body 18px en escritorio y 16–17px en móvil; interlineado cercano a 1.6.
- H1 inicial: 56–64px escritorio y 36–40px móvil, ajustado según ancho real del copy.
- Evitar depender de mayúsculas sostenidas para información importante.
- Cuando se implemente, servir WOFF2 local y cargar únicamente variantes necesarias. La propuesta del kit de usar un @import remoto no se adopta.

## Iconografía y componentes

- Una sola familia SVG de trazo consistente; candidata Lucide, 24px, stroke 1.75–2.
- Iconos con etiquetas para lesiones/servicios. Verificar que cada símbolo represente correctamente el tratamiento; no usar metáforas clínicas engañosas.
- Botón principal: Forest/blanco, texto `Request an appointment`, altura mínima 48px, radio 8px.
- Acción secundaria: llamada con teléfono visible, suficiente contraste y área táctil.
- Campos con label visible, altura mínima 48px, borde suficientemente oscuro; conservar los cinco campos, Turnstile y estados del contrato existente.
- Cards de tratamientos: título, descripción útil y espacio de fotografía; bordes discretos, radio 12px y sin sombras intensas.
- Focus visible y contrastado; hover breve, sin desplazamientos de layout. No animación continua decorativa.
- Espaciado basado en 8px; secciones amplias, líneas de texto de longitud moderada, separación clara entre temas.

## Fotografía

Dirección: luz natural, tonos de piel reales, espacios claros, interacción terapéutica respetuosa y movimiento cotidiano. Nada dramático relacionado con colisiones. No presentar escenas generadas como documentación real del equipo ni de la clínica.

La etapa del board usó placeholders. Se generaron dos imágenes: `pencil-design/images/hero-rehabilitation-v1.png`, rehabilitación de hombro conservada en la biblioteca para uso posterior, y `pencil-design/images/hero-whiplash-v1.png`, nueva imagen activa del hero por petición del usuario. El máximo inicial sigue siendo tres.

Lote inicial completado el 2026-10-09: tercera imagen `pencil-design/images/recovery-everyday-life-v1.png`, escena ilustrativa de actividad cotidiana para recuperación. La imagen de hombro se reutiliza en tratamientos. No generar más imágenes del lote inicial; usar placeholders en necesidades posteriores hasta la etapa acordada.

## Board previsto en Pencil

Archivo editable: `pencil-design/advanced-human-care.pen`. Su único frame inicial estaba vacío; fue inspeccionado por MCP y convertido en el board sin eliminar contenido del usuario. Frame raíz `bi8Au`, tamaño resuelto 1600 × 2568.

Board de 1600px de ancho, con zonas:

1. Nombre del concepto y logo original sobre blanco.
2. Paleta, hex y funciones; proporción visual con predominio de blancos/neutros.
3. Muestras tipográficas con copy EN de rehabilitación, sin afirmaciones nuevas del negocio.
4. Botones, campos, estado de focus y tarjeta de tratamiento.
5. Iconografía y tres espacios de dirección fotográfica sin imágenes generadas.
6. Miniaplicación de header/hero y contacto en escritorio/móvil para evaluar coherencia; no constituye todavía el diseño completo de la one-page.

## Fundamento y revisión pendiente

`ui-ux-pro-max` consultado con `medical rehabilitation clinic editorial`: ofrece una dirección accesible para salud y la pareja Figtree/Noto Sans. Se adopta esa orientación de legibilidad y se adapta la paleta al logo. Se descartan CTAs B2B, badges/cifras no verificadas y carruseles genéricos. El primer resultado, de claymorphism, se descartó por no encajar con la clínica.

Contrastes de tokens calculados: Forest/blanco 10.11:1; Forest/Canvas 9.48:1; Ink/blanco 13.05:1; Muted/Canvas 5.66:1; Gold ink/blanco 4.63:1. Estas combinaciones superan 4.5:1 para texto normal; no constituyen una evaluación de accesibilidad de la interfaz completa.

Revisión básica realizada sobre screenshots y bounds de Pencil: estructura sin recortes en la lectura final, texto visible, fuentes coherentes, CTA de 52px, labels visibles, dirección aprobada y logo original en las aplicaciones. El hash del logo sigue siendo `38C16D49699619D52C227E8816E0FA261346E18773AF21EF171568807D22A60D`. No equivale a auditoría WCAG ni a prueba responsive de la futura web. La revisión especializada completa corresponde al diseño de la one-page.

## Exportaciones para revisión

- Board vigente: `pencil-design/exports/typography-v4-capitalize/bi8Au.png`.
- Revisión vigente con verde Advanced, degradado y detalles dorados: `pencil-design/exports/phase-01-refinement-v2/bi8Au.png`; pantallas `O8VDD.png` y `kbGBM.png` en el mismo directorio.
- Aplicación escritorio vigente: `pencil-design/exports/typography-v4-capitalize/jVrAE.png`.
- Aplicación móvil vigente: `pencil-design/exports/typography-v4-capitalize/iZOJA.png`.
- Las exportaciones `typography-v3-lora` conservan Lora antes del cambio de capitalización.
- Las exportaciones `typography-v2` conservan Manrope para comparación.
- Las exportaciones originales en `pencil-design/exports/` conservan la propuesta Figtree anterior para comparación.
- Documento .pen guardado mediante la acción Guardar de Pencil y escritura en disco verificada. Board aprobado; la primera parte de la página requiere revisión. Dos imágenes generadas en total.

## Conexión de herramienta

El bloqueo anterior `Transport closed` se resolvió al reintentar con la conexión restablecida. El board se creó exclusivamente mediante Pencil MCP. No se leyó ni editó el formato .pen por herramientas de filesystem y no se sustituyó Pencil por otra autoridad visual.
