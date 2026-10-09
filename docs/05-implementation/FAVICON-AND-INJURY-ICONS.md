# Favicon, iconos y espacio del hero móvil

2026-10-09. Favicon con el símbolo original del logo en blanco sobre Forest #174A3A. Se reutiliza el PNG original como fuente de una máscara SVG, aislando el color dorado del emblema, sin redibujar ni alterar el logo. SVG autocontenido, ICO 16/32/48, PNG 32 y Apple Touch 180. Generador reproducible: node tools/create-favicon.mjs, usando Sharp ya disponible mediante Astro, sin instalar dependencias.

Links declarados en PageLayout.astro. Se verificaron los archivos renderizados y respuestas HTTP locales 200 con tipos correctos; el HTML generado contiene las cuatro referencias. La extensión de automatización del navegador reemplaza las referencias favicon con su badge durante la sesión, por lo que no se afirma validación de la pestaña normal a partir de esa sesión.

Cuatro bloques de lesiones: check Lucide uniforme, según alternativa autorizada por el usuario, manteniendo círculos Canvas y dorado oscuro. Se revisó Health Icons como candidato (https://github.com/resolvetosavelives/healthicons); no se incorporó un paquete ni se mezclaron estilos médicos incompletos para estas cuatro lesiones. Contenido y títulos preservados.

Hero móvil, menos de 760 px: row-gap entre texto/botones y media de 24 a 40 px. Chrome a 390 px confirma separación de 40 px y ausencia de overflow; el resto de breakpoints mantiene su separación. Las cuatro marcas SVG del bloque son idénticas.

Astro check: cero errores, warnings e hints. Build exitoso. Se conservan noindex/nofollow y los pendientes de formulario/español. Publicación por GitHub y despliegue automático de Cloudflare.
