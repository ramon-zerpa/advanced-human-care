# Primera implementación Astro — EN

Fecha: 2026-10-09. Diseño Pencil aprobado explícitamente por el usuario, incluida la imagen de espalda v4 que se conserva por ahora. Inglés primero; español al final. Esta entrega es una vista de revisión, no el lanzamiento del dominio legacy ni una integración de formulario validada.

## Implementado

- Header, topbar, hero, lesiones, ocho tratamientos, documentación/seguro, equipo, recuperación/testimonios, FAQ, contacto y bottom bar.
- Lora 600 italic para títulos y Noto Sans 400/600 para cuerpo e interfaz, locales con licencias y dos preloads. Contenido centralizado en src/data/site.ts.
- Logo original intacto. Imágenes ilustrativas aprobadas procesadas por astro:assets: cuatro fotografías y 16 variantes WebP responsive. Hero eager/high priority; otras imágenes lazy, con tamaños reservados.
- Degradados aprobados en topbar, bottom bar y CTA principales. Teléfono del hero transparente con borde Forest. Horario a la izquierda en móvil. Selector de idioma solo en header desktop y menú móvil abierto; sin selector en footer. ES deshabilitado hasta completar localización, sin enlace a una página incompleta.
- Navegación nativa, apertura/cierre móvil, Escape, cierre al navegar y foco hacia la sección elegida. Hover sin cambio de peso/tamaño, animación suave del hero y reduced motion.
- Primera visita: recorte superior. En escritorio el contenedor de imagen ocupa el espacio restante para alinear su borde inferior con la última FAQ, sin JS de medición. Móvil mantiene altura 216 px.
- Mapa real con dirección aprobada, cargado cerca de contacto; enlace externo disponible.
- Formulario con cinco campos y los máximos/obligatorios del legacy; cliente preparado para FormData POST /api/contact, Turnstile diferido y estados de envío/errores/éxito. El mensaje de éxito permanece visible al reiniciar Turnstile.

## Formulario pendiente

Revisión actual del dashboard: advanced-human-care tiene únicamente NODE_VERSION y ningún binding. La cuenta accesible e647ec8fc06db97c1deb3d61c290ab38 muestra dos proyectos; el legacy no está entre ellos. El usuario indicó dejar pendiente esta integración si no puede recuperarse desde el sitio público. El sitio público permite comprobar campos y contrato del cliente, pero no secretos ni configuración de entrega. No se inventa otro backend/proveedor ni se considera bloqueada la revisión del frontend.

Sin PUBLIC_TURNSTILE_SITE_KEY el envío permanece deshabilitado y se ofrece llamar. Falta configurar/verificar endpoint, secreto/widget y hosts admitidos, proveedor/destinatarios, límites y recepción real de una prueba identificada. No hay afirmación de equivalencia funcional completa todavía; /api/contact aún no existe en este repo. Las llamadas y enlaces de contacto funcionan.

## Evidencia local

- Astro 7.3.8 compila localmente: el bloqueo anterior de Application Control no se reproduce; no se cambió ninguna protección ni versión Astro.
- npm run check: 0 errores, 0 warnings, 0 hints.
- npm run build: exitoso, una página estática y 16 imágenes optimizadas.
- npm audit --omit=dev: 0 vulnerabilidades.
- Chrome: revisados anchos 320, 390, 768, 1120 y 1440 sin desbordamiento horizontal; revisión visual de hero, menú y contacto. Escape devuelve foco al botón; CTA del menú cierra y enfoca #contact-us. Dirección y horario comparten coordenada izquierda de 24 px en móvil.
- A 1440, imagen de primera visita y última FAQ terminan en el mismo y (diferencia 0 px), object-position: center top. Campos nativos y máximos verificados; no se hicieron envíos reales.
- Chrome tiene scripts de extensión Adblock360 que producen errores ajenos al código del sitio; no se modificó la extensión. Esta observación no certifica Safari/iPhone ni constituye una auditoría WCAG/Lighthouse.

## Publicación de revisión

Se conserva noindex/nofollow en HTML y X-Robots-Tag. Cloudflare se despliega exclusivamente por GitHub; dominio legacy sin cambios. Exportaciones históricas de Pencil quedan locales e ignoradas en Git; el editable y las imágenes fuente quedan versionados. El usuario revisó la vista y acepta el estado actual como base para nuevas pruebas. Esto no constituye autorización de lanzamiento: faltan integración real del formulario y cierre de calidad, SEO/rendimiento antes de dar EN por terminado y comenzar ES.

## Responsive implementado

Los puntos de cambio están en src/styles/global.css; la navegación también cierra el menú al pasar a escritorio mediante min-width: 1120px.

| Ancho de viewport | Comportamiento |
|---|---|
| 1280 px o más | Escritorio completo; contenedor máximo de 1248 px |
| 1120–1279 px | Escritorio compacto; márgenes de 32 px, logo de 165 px y menor separación de navegación |
| 760–1119 px | Header con menú hamburguesa; columnas adaptadas a tablet; email y teléfono del formulario apilados |
| 360–759 px | Secciones en una columna, márgenes de 24 px; dirección y horario alineados a la izquierda |
| Menos de 360 px | Ajustes para pantallas pequeñas: CTA bajo selector EN/ES en menú y padding de formulario de 16 px |

Queries CSS exactas: max-width: 1279px junto a min-width: 1120px; max-width: 1119px; max-width: 759px; max-width: 359px. También se respetan hover: hover y prefers-reduced-motion: reduce. Las pruebas previas en Chrome cubren 320, 390, 768, 1120 y 1440 px; no certifican otros navegadores.

Referencias usadas: https://docs.astro.build/en/guides/images/ y https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/. No se incorporaron integraciones adicionales de compresión/critical CSS sin una necesidad medida; la página es estática, sin React ni hidratación de componentes.

## Deploy comprobado

Push de codex/english-implementation, commit 0eea8bdf5ba1776650f62eb5b67358bff87617d6. Check Cloudflare Pages completed/success. Deployment c1b9da74-c3a7-4660-8cae-a0f02b00702c, URL https://c1b9da74.advanced-human-care.pages.dev/.

HTTP 200 y X-Robots-Tag noindex/nofollow. Un H1, ocho tratamientos, anclas preservadas, footer sin switcher; fuentes precargadas, CSS, logo y cuatro imágenes referenciadas responden 200. Ver preview-http.json y tools/verify-preview.mjs. Navegador confirma hero cargado y formulario deshabilitado mientras falta configuración. Hash del logo desplegable idéntico al original.

Payload local generado: HTML 34.3 kB (8.2 kB gzip), CSS 15.8 kB (3.9 kB gzip), scripts nativos inline 4.1 kB, tres fuentes WOFF2. Son tamaños de archivos, no una puntuación Lighthouse ni métricas de usuarios reales.
