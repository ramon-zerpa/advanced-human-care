# Primera parte de la página — revisión

Fecha: 2026-10-08. Brand-board aprobado. Alcance autorizado: header, hero (sección 01) y lesiones (sección 02); detenerse aquí y esperar confirmación del usuario.

## Entrega en Pencil

- Archivo: `pencil-design/advanced-human-care.pen`.
- Escritorio: frame `O8VDD`, 1440px de ancho; exportación `pencil-design/exports/phase-01-header-hero-injuries/O8VDD.png`.
- Móvil: frame `kbGBM`, 390px de ancho; exportación `pencil-design/exports/phase-01-header-hero-injuries/kbGBM.png`.
- Header con logo original, navegación y teléfono; contacto y horario en escritorio. Móvil con teléfono y representación del botón de menú.
- Hero con H1 específico de rehabilitación por accidentes en Tampa, introducción del legacy, CTA de cita, llamada, imagen nueva y dirección oficial aprobada.
- Segunda sección: Whiplash, Back Pain, Knee Pain y Shoulder Pain. Se conservan las cuatro descripciones del legacy. Columnas abiertas en escritorio y filas en móvil.

Lora Semibold Italic para títulos, primera letra de cada palabra en mayúscula. Noto Sans para cuerpo y controles. Paleta aprobada del brand-board. Logo original sin modificaciones.

## Imagen

Dos imágenes generadas con la herramienta integrada ImageGen: `pencil-design/images/hero-rehabilitation-v1.png`, rehabilitación de hombro reservada en la biblioteca de Pencil (frame `wDu5m`), y `pencil-design/images/hero-whiplash-v1.png`, evaluación de movilidad cervical activa en el hero. Son escenas ilustrativas y no representan al personal ni al espacio real de la clínica. Sigue disponible una imagen del máximo inicial de tres. La optimización para publicación corresponde a la implementación en Astro.

## Ajustes de revisión

Verde Advanced `#009E3B` extraído del archivo original sin modificarlo; añadido al board y al inicio izquierdo del degradado del topbar, con Forest al extremo derecho. Header telefónico Forest/blanco; en código tendrá movimiento breve del icono al hover/focus, desactivado con reduced motion. El hero muestra el número `(813) 542-3613` en un botón Gold/Ink. Iconos de las cuatro lesiones con fondo Gold soft y trazo Gold ink.

Exportaciones vigentes: `pencil-design/exports/phase-01-refinement-v2/O8VDD.png`, `kbGBM.png` y `bi8Au.png`. Las exportaciones anteriores se conservan como historial.

Prompt de la nueva imagen: fotografía editorial natural 4:3, paciente adulta sentada y terapeuta con uniforme verde salvia evaluando suavemente movilidad de cuello y hombro superior; rostros, cuello y manos visibles; habitación clara, luz natural, sin manipulación brusca, collarín, dramatización de dolor, texto ni logos. Herramienta integrada; escena ilustrativa de recuperación de whiplash.

## Verificación y límite

Exportaciones inspeccionadas a tamaño real. Inspección de problemas de layout de Pencil sin incidencias reportadas en ambos frames. Archivo guardado con la acción Guardar de Pencil y escritura en disco verificada. Esto valida la composición en dos anchos, no constituye pruebas responsive o de accesibilidad de una web implementada.

Esta entrega es diseño editable en Pencil. No se implementaron todavía estos componentes en Astro ni se publicaron cambios visuales. Los enlaces, el menú y las acciones son representaciones visuales; su comportamiento se implementará en la fase de código. No se diseñaron nuevas secciones, formulario ni footer.

**Punto de parada:** revisar esta primera parte con el usuario y esperar su confirmación antes de continuar el diseño o la implementación.

## Revisión 3 — topbar, idioma y profundidad

Se elimina la superficie blanca de Tampa. El degradado conserva Advanced Green en el extremo izquierdo y alcanza `#008432` al 6% del ancho, antes del texto de ubicación, continuando hasta Forest. Blanco sobre ese verde intermedio: 4.83:1. El texto comienza después de esa parada del degradado.

Selector EN/ES visible en header de escritorio y móvil, con EN activo y celdas de 44px. Es una representación de diseño: la versión española se implementará al final y no debe enlazarse al legacy español durante el lanzamiento EN.

Blanco sobre el dorado actual `#C89B3C`: 2.56:1, insuficiente para el texto del botón. Se conserva Ink sobre Gold: 5.10:1. Los iconos mantienen los colores de la revisión anterior que el usuario valoró positivamente.

Sombras suaves: botones del hero con desplazamiento vertical de 3px, blur 10px y Forest al 12%; imagen con desplazamiento de 5px, blur 20px y Forest al 8%. La imagen tiene menor intensidad para evitar competir con las acciones.

Exportaciones vigentes: `pencil-design/exports/phase-01-refinement-v3/O8VDD.png`, `kbGBM.png` y `bi8Au.png`.

## Revisión 4 — alternativa de llamada y hero

El usuario rechaza el botón dorado del hero. Nueva propuesta: fondo blanco, borde Forest de 1px, texto e icono Forest. Los detalles dorados permanecen en los cuatro iconos de lesiones.

Sombras aumentadas moderadamente: botones con offset vertical 4px, blur 14px y Forest al 18%; imagen con offset 7px, blur 24px y Forest al 14%. Separación imagen/caption: 32px en escritorio y móvil, sin ampliar todos los gaps del hero móvil.

Animación para la futura fase de código: una entrada coordinada con CSS; grupo de copy desde translateY 12px durante 550ms, imagen desde 8px durante 650ms, retraso máximo 100ms y opacidad inicial 0.92. Contenido visible por defecto, sin depender de JavaScript ni retrasar la carga de la imagen. Desactivar con `prefers-reduced-motion`. Interacción breve de botones en hover/focus, sin animación infinita. Pencil representa el estado estático final, no reproduce esta animación.

Exportaciones vigentes: `pencil-design/exports/phase-01-refinement-v4/O8VDD.png`, `kbGBM.png` y `bi8Au.png`. Se mantiene el punto de parada tras la segunda sección.

## Revisión 5 — llamada blanca con dorado oscuro

Acción telefónica del hero: fondo blanco, borde de 1px, icono y teléfono en Gold ink `#986D16`, el mismo tono de los iconos de lesiones. Contraste sobre blanco: 4.63:1, suficiente para texto normal AA y para el icono/borde (3:1). El dorado decorativo `#C89B3C` da 2.56:1 y no sirve para esos elementos sobre blanco. Se conserva la sombra anterior. La validación es de esta combinación de color, no una declaración de conformidad WCAG de toda la interfaz.

Exportaciones actuales: `pencil-design/exports/phase-01-refinement-v5/O8VDD.png`, `kbGBM.png` y `bi8Au.png`.

## Revisión 6 — teléfono del header con degradado

El botón telefónico del header de escritorio usa el mismo degradado del topbar: Advanced Green a la izquierda, `#008432` al 6% y Forest a la derecha. Icono y número blancos. La parada del 6% está antes del icono, que empieza a 18px del borde; toda la información está sobre el tramo con contraste blanco de al menos 4.83:1. Borde Forest conservado. La conformidad de color corresponde al estado estático; hover, focus y animación deberán verificarse en código.

Exportaciones vigentes: `pencil-design/exports/phase-01-refinement-v6/O8VDD.png`, `kbGBM.png` y `bi8Au.png`.
