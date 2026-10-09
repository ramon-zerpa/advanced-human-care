# Hero: ventana de escenas — prueba local

Historial: esta propuesta se conserva en el commit local `9a0b8ab`. Fue sustituida en la misma rama por [la composición editorial](HERO-EDITORIAL-TRIAL.md). El controlador, controles y pruebas específicas del slideshow fueron retirados; las imágenes fuente permanecen disponibles.

2026-10-09. Rama `codex/hero-scene-window`, desde `216e6a7` en `codex/english-implementation`. Por indicación del usuario: sin push, sin despliegue y sin merge. Vista local: http://127.0.0.1:4321/.

## Alcance

Solo cambia el hero; se sustituyen los halos por una ventana 4:3 con marco Sage discreto. Texto, tipografía, enlaces, CTA y datos permanecen intactos. Se retiran las animaciones de entrada del texto y media en este hero para mostrar el contenido desde el primer render.

Tres escenas generadas con la herramienta integrada image_gen, conservadas como PNG sustituibles en src/assets/images/hero-scenes: personalized-care.png, assisted-mobility.png y rehabilitation-space.png. Revisadas visualmente en manos, rostros, postura y material. Astro genera cuatro tamaños WebP por escena (360, 580, 800, 1160). Solo la primera tiene prioridad alta y carga eager.

Dirección de prompts: fotografía editorial realista 4:3, luz natural suave, paredes marfil cálido, acentos Sage/Forest, madera clara, contraste contenido, composición centrada para recorte móvil, anatomía natural y sin texto/logos/señalización. Escena 1: hombre adulto conversando con profesional mujer en scrubs Sage, sentados en sillas independientes, encuadre medio y manos naturales. Escena 2: mujer adulta sentada realizando movilidad sencilla del hombro con profesional mujer supervisando; sin maniobras complejas ni camilla. Escena 3: dos mancuernas Sage, colchoneta crema enrollada y banco de madera en un espacio tranquilo, sin personas ni máquinas complejas. Se usó la herramienta integrada, sin API/CLI alternativo ni fotos ajenas.

Nota accesible EN: “Illustrative scenes · Not actual clinic photographs.” Imágenes decorativas con alt vacío y contenedor aria-hidden, sin anuncios de cada cambio.

## Comportamiento

Cada escena permanece 7 segundos, más el tiempo necesario para decodificar la siguiente si la red es lenta. Revelado lateral mediante clip-path y transform durante 1100 ms; marco estable y escena anterior detrás hasta completar. Sin zoom, librerías ni nuevas dependencias.

Botón nativo Pause/Resume con aria-pressed y foco visible. Una pausa durante el revelado fija inmediatamente la escena entrante ya decodificada y cancela el temporizador. Fuera del hero y con pestaña oculta se detiene. Movimiento reducido conserva la primera escena y desactiva el control. Limpieza en pagehide y astro:before-swap; el proyecto actual no usa navegación del cliente.

## Evidencia y límites

- Astro check: 0 errores, warnings e hints; build exitoso, 24 variantes WebP totales del sitio.
- Chrome local a 1440 y 390 px: reproducción visible, pausa con Enter, reanudación con Space, ausencia de overflow horizontal, ambos CTA accesibles por hit-test. Imagen móvil de aproximadamente 239 px de alto a 390 px; recorte superior conserva caras y manos.
- `node tools/hero-scenes-check.mjs`: controlador con eventos sintéticos para pausa durante transición, resume, pestaña oculta, salida de pantalla, movimiento reducido, fallo de decode y limpieza. Movimiento reducido probado en el controlador, no mediante una preferencia real del sistema operativo ni en Safari/iPhone.
- HTML generado servido temporalmente sin scripts del sitio: primera imagen cargada y visible, titular opacidad 1 y CTA presentes; control oculto. Las extensiones del navegador siguen inyectando sus propios scripts. Esta comprobación no equivale a deshabilitar JavaScript globalmente en el navegador.
- Capturas locales de escritorio y móvil fuera del repo en la carpeta de visualizaciones de Codex. No se publica esta prueba hasta la revisión del usuario.

Archivos funcionales: src/components/Hero.astro, src/scripts/hero-scenes.ts y las tres imágenes fuente. Otras secciones y estilos globales sin cambios.
