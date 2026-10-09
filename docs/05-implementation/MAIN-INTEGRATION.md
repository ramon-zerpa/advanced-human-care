# Integración de la versión aprobada en main

2026-10-09. Autorización expresa del usuario: “integralo al main y sube todo actualizado al repo”.

Versión aprobada procedente de codex/hero-scene-window, código hasta 83b061f. Incluye implementación EN completa, hero editorial con foto de cuello principal y conversación secundaria, mensaje desplazado a la izquierda, marco Sage arriba/derecha, entrada única, flotación y hover. En móvil se conserva foto principal y mensaje. Header: teléfono con efecto automático cada 4 segundos y brillo diagonal del logo cada 6 segundos. No quedan halos ni slideshow, controles o temporizadores de propuestas anteriores.

El logo original permanece intacto. Contenido, enlaces, CTA y resto de secciones preservados. Dependencias sin cambios. Fotografías conceptuales existentes; ninguna generación adicional para esta integración.

## Alcance de publicación

Integración a main y push a GitHub, con despliegue automático de Cloudflare Pages en https://advanced-human-care.pages.dev/. No se ejecutan despliegues manuales, no se conecta el dominio legacy y no se retira noindex/nofollow. Se conservan como pendientes el backend de /api/contact (envío deshabilitado sin Turnstile), la versión español y el cierre de calidad/SEO/rendimiento.

## Validación

Astro check pasó con 0 errores, warnings e hints y el build fue exitoso sobre el contenido final integrado, sin modificaciones posteriores de código. Las revisiones previas Chrome cubren desktop/tablet/mobile, ausencia de overflow, composición, CTA y hover; los ciclos del header son 4s/6s. Movimiento reducido implementado en CSS, sin prueba de la preferencia real del sistema. Ver documentación de hero/header para las limitaciones y evidencias.

La comprobación de Cloudflare se realiza después del push contra el commit de main y contra el contenido público; una recepción de GitHub por sí sola no demuestra que el deploy haya terminado.

## Despliegue verificado

Push a main: a74ba624eceb954a9cf365d3b6ec9bea2705d8c3. Check Cloudflare Pages completed/success, deployment 3f64052d-c3a8-4943-826d-217ca9fc8cb4. URL https://advanced-human-care.pages.dev/ verificada después de completar el check: HTTP 200, noindex/nofollow, un H1, ocho tratamientos, anclas preservadas, footer sin switcher y assets 200. Logo SHA256 idéntico al original. Reporte guardado en main-http.json.

Chrome público confirma ambas fotos del hero cargadas, marco Sage, ausencia de efectos anteriores/nota/control, ciclos teléfono 4s y logo 6s, y ausencia de overflow. El commit documental que registra esta evidencia no modifica el código del sitio.
