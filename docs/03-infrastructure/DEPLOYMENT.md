# GitHub y Cloudflare

## Confirmado

- Usuario autoriza crear repo y conectarlo a su cuenta Cloudflare con despliegue automático desde GitHub.
- Repo privado: https://github.com/ramon-zerpa/advanced-human-care.
- Rama principal: `main`.
- Proyecto local: `C:/Users/raymo/Downloads/advanced-human-care`.
- Identidad Git: usar identidad histórica del commit inicial, configurada solo localmente.
- GitHub CLI autenticado y repo creado/verificado.

## Estado

Entrega actual 2026-10-09: el usuario autoriza integrar la versión editorial aprobada a `main` y subir todo al repositorio. Sustituye la restricción de pruebas exclusivamente locales. El push a `main` publica mediante la integración GitHub existente en https://advanced-human-care.pages.dev/. No se cambia el dominio legacy ni se retira noindex/nofollow; formulario y español continúan pendientes. La verificación del despliegue de esta entrega se registra en docs/05-implementation/MAIN-INTEGRATION.md. Los deployments descritos a continuación corresponden al historial anterior a esta integración.

Actualizado 2026-10-09: frontend EN implementado en `codex/english-implementation`, revisado por el usuario y conservado como base para nuevas pruebas. Preview verificado: https://c1b9da74.advanced-human-care.pages.dev/, deployment `c1b9da74-c3a7-4660-8cae-a0f02b00702c`, commit `0eea8bd`. El check de GitHub también confirma éxito para el commit documental `ed4be1a`, deployment `666cbb64-eef9-45ee-9afd-7b145ccdb200`; su URL pública no se ha comprobado por separado. Producción permanece en `main` con la base inicial. No se ha conectado el dominio legacy ni fusionado esta implementación a producción.

Proyecto Cloudflare Pages `advanced-human-care` creado y conectado al repo mediante la integración GitHub existente, sin modificar permisos. Dashboard confirma `Automatic deployments enabled`, producción en `main` y dominio `advanced-human-care.pages.dev`. No se ha cambiado el dominio ni el sitio legacy.

Primer deployment: `6aa52425-9171-49da-98da-c532ecb5e870`, commit `a1eba5a137d83405c4a45662a1478a04f9dd7d2b`. Build y despliegue exitosos, también confirmados por el check `Cloudflare Pages` de GitHub. HTTP público 200, H1 Advanced Human Care, meta robots y cabecera X-Robots-Tag noindex/nofollow verificados.

URL del proyecto: https://advanced-human-care.pages.dev/.
Dashboard: https://dash.cloudflare.com/e647ec8fc06db97c1deb3d61c290ab38/pages/view/advanced-human-care.

Prueba de push posterior a la conexión: commit `8a2897da11ea26098fc0c4e837a7b0d424188471` disparó automáticamente deployment `3b39befa-a476-4992-9bb3-09dcc8f69c5e`, exitoso según dashboard y check GitHub. Captura en `evidence/cloudflare-github-connected.png`. Conexión y automatización verificadas; formulario aún pendiente.

La base mínima inicial fue sustituida en la rama de implementación por el rediseño EN completo. Tanto la vista de revisión como la base de producción conservan meta robots y cabecera X-Robots-Tag noindex/nofollow. Retirar esta restricción solo cuando corresponda publicar el sitio aprobado.

Node local 24.21.0, mismo valor configurado en `.node-version` y `NODE_VERSION` de Pages para producción y previews. Astro 7.3.8: comprobación y build local exitosos, además del build remoto. El bloqueo previo de Application Control sobre el binding nativo ya no se reproduce; no se modificaron protecciones. La prueba temporal de Astro 6.4.8 fue descartada y no representa el estado actual. Evidencia de validación en docs/05-implementation/EN-PREVIEW.md.

## Configuración aplicada y pendientes

- Cloudflare Pages mediante integración GitHub para la one-page Astro estática; integración servidor del formulario pendiente.
- Repositorio objetivo exclusivamente `ramon-zerpa/advanced-human-care`; conservar permisos existentes de otros proyectos si se amplía la instalación GitHub.
- Producción: `main`; previews de ramas/PR según configuración acordada.
- Build Astro: `npm run build`; salida: `dist`; raíz del proyecto: `/`.
- Node 24.21.0 compatible con el requisito >=22.12.0 de Astro 7.3.8.
- Dashboard inspeccionado: solo NODE_VERSION, sin bindings ni secretos de formulario configurados. Legacy no encontrado en la cuenta accesible. El usuario indicó dejar la integración pendiente por ahora; no inventar configuración ni publicar secretos. /api/contact aún no existe y el envío permanece deshabilitado sin Turnstile.
- La verificación inicial será en el subdominio generado del nuevo proyecto. El dominio actual solo se conectará en la fase de publicación aprobada.
- No ejecutar `wrangler deploy`, `wrangler pages deploy`, `vercel deploy` ni comandos equivalentes. Publicar mediante commit/push y comprobar deploy automático.

## Criterios de conexión — verificados para el frontend

1. Proyecto Cloudflare muestra repo y rama correctos.
2. Build/output correctos; configuración servidor del formulario pendiente por separado.
3. Push dispara build automático y deployment exitoso para el commit correspondiente.
4. URL pública del proyecto responde y corresponde al contenido de ese commit.

## Referencias oficiales

- https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
