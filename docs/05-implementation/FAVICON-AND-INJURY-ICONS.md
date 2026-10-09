# Favicon, iconos y espacio del hero móvil

2026-10-09. Favicon con el símbolo original del logo en blanco sobre Forest #174A3A. Se reutiliza el PNG original como fuente de una máscara SVG, aislando el color dorado del emblema, sin redibujar ni alterar el logo. SVG autocontenido, ICO 16/32/48, PNG 32 y Apple Touch 180. Generador reproducible: node tools/create-favicon.mjs, usando Sharp ya disponible mediante Astro, sin instalar dependencias.

Links declarados en PageLayout.astro. Se verificaron los archivos renderizados y respuestas HTTP locales 200 con tipos correctos; el HTML generado contiene las cuatro referencias. La extensión de automatización del navegador reemplaza las referencias favicon con su badge durante la sesión, por lo que no se afirma validación de la pestaña normal a partir de esa sesión.

Cuatro bloques de lesiones: check Lucide uniforme, según alternativa autorizada por el usuario, manteniendo círculos Canvas y dorado oscuro. Se revisó Health Icons como candidato (https://github.com/resolvetosavelives/healthicons); no se incorporó un paquete ni se mezclaron estilos médicos incompletos para estas cuatro lesiones. Contenido y títulos preservados.

Hero móvil, menos de 760 px: row-gap entre texto/botones y media de 24 a 40 px. Chrome a 390 px confirma separación de 40 px y ausencia de overflow; el resto de breakpoints mantiene su separación. Las cuatro marcas SVG del bloque son idénticas.

Astro check: cero errores, warnings e hints. Build exitoso. Se conservan noindex/nofollow y los pendientes de formulario/español. Publicación por GitHub y despliegue automático de Cloudflare.

## Refinamiento aprobado

2026-10-09, posterior a 6466821. El usuario aprobó la propuesta y autorizó commit, push y prueba de PageSpeed después del despliegue automático de Cloudflare.

- Favicon: el generador mide los límites visibles de la máscara del emblema original y escala proporcionalmente dentro de un área de 112 × 112 en el lienzo de 128 × 128. Centrado por límites visibles, con 8 px nominales arriba y abajo. Se regeneran SVG, ICO, PNG y Apple Touch; el logo original permanece intacto.
- Hero móvil: separación entre contenido/CTA e imagen de 40 a 64 px, únicamente bajo 760 px. Se conserva la composición de escritorio.
- Se sustituye el check por cuatro iconos anatómicos SVG originales en InjuryIcon.astro: cuello para Whiplash, espalda, rodilla y hombro. Mismo trazo redondeado, zona destacada con círculo, Canvas y dorado oscuro. Tamaños 32 px en escritorio y 28 px en móvil; decorativos, aria-hidden, sin JavaScript ni dependencias nuevas.
- Investigación: Health Icons (https://github.com/resolvetosavelives/healthicons), Anatomy de SVG Repo (https://www.svgrepo.com/collection/anatomy/) y Body Ache Outline de Envato (https://elements.envato.com/body-ache-outline-icon-set-JH3FDJ5). No se incorpora ningún SVG ajeno ni se copia el set comercial. Esta propuesta es un set propio para revisión, no una descarga de esas colecciones.
- Check de Astro: 0 errores, warnings e hints. Build exitoso. Revisión visual local en Chrome a 390 y 1440 px, sin overflow horizontal; el CTA conserva #contact-us. Capturas de revisión en la carpeta de visualizaciones physio-refinements.
