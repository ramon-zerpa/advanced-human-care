# ALT e icono del hero

2026-10-09. Cambio solicitado por el usuario: ALT de foto principal exactamente igual al H1 (Car Accident Rehabilitation In Tampa.) y ALT de foto secundaria igual al H2 siguiente (Care For Common Car Accident Injuries.). Sustituyen los ALT vacíos de la clasificación decorativa anterior.

Get Your Lifestyle Back. usa Child: SVG local de persona con brazos levantados en Icon.astro, porque el paquete Lucide instalado no incluye Child. Mantiene tamaño 28, trazo redondeado, currentColor y aria-hidden del componente. Sin dependencias nuevas ni cambios de composición/animación.

Astro check: cero errores, warnings e hints. Build correcto. Chrome local confirma ALT idénticos a H1/H2, foto cargada, nuevo icono y ausencia de overflow. Esta validación es de código/visual; no se ejecuta un nuevo PageSpeed y no se atribuyen al nuevo commit las métricas previas. El último informe de PageSpeed incluye Agentic Browsing 4/4 para db1de36.

## ID localizado y selección de icono

El usuario solicita ID del H1 derivado de su texto: car-accident-rehabilitation-in-tampa. headingId en src/utils/heading-id.ts elimina tildes/puntuación, convierte a minúsculas y separa palabras con guiones. H1, ALT principal y aria-labelledby toman la misma constante de título. Regla EN/ES en AGENTS.md: la futura página española usará su título localizado, no el slug inglés; la versión ES sigue pendiente y no se crea en esta entrega.

El usuario rechaza el Child personalizado y pide elegir desde el set. Se crea una galería local reproducible con tools/create-icon-gallery.mjs, usando los SVG del paquete Lucide instalado, con nueve opciones iniciales y buscador sobre los 2130 nombres disponibles (incluidos alias). HTML generado fuera del sitio, servido solo en localhost:4322. No se sustituye el icono hasta recibir su selección.

Check/build correctos. Chrome local confirma H1 ID único y referencia aria-labelledby idéntica; búsqueda PersonStanding muestra una opción. No se ejecutó un nuevo PageSpeed en este ajuste; no se omite Agentic del último informe de calidad citado arriba.

## Selección final y entrada de servicios

El usuario selecciona HeartHandshake de Lucide para Get Your Lifestyle Back. Se sustituye Child y se elimina su SVG personalizado de Icon.astro. Conserva tamaño 28 y color Forest.

Los cuatro bloques de lesiones/servicios tienen una entrada única al intersectar el viewport (threshold 0,15): opacidad y translateY, 650 ms, escalonado de 0/90/180/270 ms en escritorio. En móvil, desplazamiento reducido de 16 a 10 px y sin retraso individual. CSS desactiva la entrada con prefers-reduced-motion; el script omite el observer si esa preferencia está activa. Contenido visible por defecto sin JavaScript o sin IntersectionObserver. Observer deja de observar cada bloque tras su entrada y se desconecta al completar los cuatro o abandonar la página.

Check/build correctos. Chrome a 1440 y 390 px confirma cuatro bloques revelados, delays previstos y sin overflow horizontal. No se cambian títulos, contenido, espaciado, CTA ni IDs. No se ejecuta otro PageSpeed por este ajuste acotado; métricas de calidad/Agentic anteriores siguen vinculadas a db1de36. Preferencia de movimiento reducido verificada en código, no mediante cambio de la configuración del sistema.
