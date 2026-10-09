# Integración de la versión aprobada en main

2026-10-09. Autorización expresa del usuario: “integralo al main y sube todo actualizado al repo”.

Versión aprobada procedente de codex/hero-scene-window, código hasta 83b061f. Incluye implementación EN completa, hero editorial con foto de cuello principal y conversación secundaria, mensaje desplazado a la izquierda, marco Sage arriba/derecha, entrada única, flotación y hover. En móvil se conserva foto principal y mensaje. Header: teléfono con efecto automático cada 4 segundos y brillo diagonal del logo cada 6 segundos. No quedan halos ni slideshow, controles o temporizadores de propuestas anteriores.

El logo original permanece intacto. Contenido, enlaces, CTA y resto de secciones preservados. Dependencias sin cambios. Fotografías conceptuales existentes; ninguna generación adicional para esta integración.

## Alcance de publicación

Integración a main y push a GitHub, con despliegue automático de Cloudflare Pages en https://advanced-human-care.pages.dev/. No se ejecutan despliegues manuales, no se conecta el dominio legacy y no se retira noindex/nofollow. Se conservan como pendientes el backend de /api/contact (envío deshabilitado sin Turnstile), la versión español y el cierre de calidad/SEO/rendimiento.

## Validación

Astro check y build deben pasar sobre la versión final integrada. Las revisiones previas Chrome cubren desktop/tablet/mobile, ausencia de overflow, composición, CTA y hover; los ciclos del header son 4s/6s. Movimiento reducido implementado en CSS, sin prueba de la preferencia real del sistema. Ver documentación de hero/header para las limitaciones y evidencias.

La comprobación de Cloudflare se realiza después del push contra el commit de main y contra el contenido público; una recepción de GitHub por sí sola no demuestra que el deploy haya terminado.
