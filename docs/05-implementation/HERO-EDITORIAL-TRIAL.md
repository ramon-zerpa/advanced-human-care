# Hero editorial — prueba local

2026-10-09. Misma rama `codex/hero-scene-window`, desde la prueba de ventana `9a0b8ab`. Solo local, sin push, despliegue ni merge. Vista: http://127.0.0.1:4321/.

## Composición

Hero.astro conserva textos, enlaces, CTA, datos y tipografía. La frase existente “Get Your Lifestyle Back.” pasa a una tarjeta Sage con icono Activity y texto Forest, sin duplicarse. Foto principal de atención: personalized-care.png; detalle de material: rehabilitation-space.png. Ambas reutilizadas de la prueba anterior, sin nuevas generaciones. Nota ilustrativa conservada; alt vacío en las imágenes decorativas.

Escritorio: foto principal 90% de la zona visual, detalle 36% con inclinación de 3 grados y mensaje inferior horizontal. Dimensiones reservadas mediante aspect-ratio; sombras de tokens existentes. Tablet: detalle 30%, inclinación 2 grados y mensaje de 18 px. Móvil: foto principal y mensaje superpuesto; detalle oculto, sin inclinación y con desplazamientos de entrada de 8 px.

Entrada única mediante CSS transform/opacity: principal 650 ms sin ocultarla, detalle 650 ms con retraso de 120 ms y mensaje 600 ms con retraso de 240 ms. Un IntersectionObserver añade una clase al entrar la composición en pantalla y se desconecta. Sin scroll listeners, temporizadores ni reproducción continua. Texto y CTA sin animación. Movimiento reducido evita iniciar el observador y desactiva las animaciones CSS; sin JavaScript la composición final queda visible por defecto.

Eliminados src/scripts/hero-scenes.ts y tools/hero-scenes-check.mjs, además de todos los estilos y controles del slideshow. Recursos conservados en la biblioteca, incluida la foto de movilidad que ya no se usa en el hero. Otras secciones y estilos globales intactos.

## Comprobaciones

- Astro check: 0 errores, warnings e hints. Build exitoso, 19 variantes WebP en el sitio. Sin dependencias nuevas.
- Chrome a 1440, 768, 390 y 320 px: sin overflow horizontal; fotos, mensaje y CTA legibles. Hit-test confirma ambos botones libres de capas decorativas. Enlace de cita conserva destino #contact-us; teléfono conserva tel:+18135423613.
- Entrada de una sola iteración; al volver al hero permanece la clase de entrada, sin reiniciarse. Espacio reservado sin cambios de layout por la animación: solo transform/opacity, sin modificar dimensiones. No se hizo una medición numérica de CLS.
- Copia temporal del HTML sin scripts del sitio: las tres tarjetas con opacidad 1, animation none y titular visible. La copia fue retirada después. Extensiones siguen habilitadas: no equivale a deshabilitar JavaScript globalmente.
- Regla prefers-reduced-motion inspeccionada en el CSS compilado y condición matchMedia en el código. No se cambió la preferencia real del sistema ni se realizó emulación de esta preferencia en el navegador.
- Capturas desktop/tablet/mobile conservadas fuera del repo en la carpeta de visualizaciones de Codex. Sin pruebas Safari/iPhone ni auditoría de rendimiento nueva.
