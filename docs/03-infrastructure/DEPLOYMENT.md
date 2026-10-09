# GitHub y Cloudflare

## Confirmado

- Usuario autoriza crear repo y conectarlo a su cuenta Cloudflare con despliegue automático desde GitHub.
- Repo privado: https://github.com/ramon-zerpa/advanced-human-care.
- Rama principal: `main`.
- Proyecto local: `C:/Users/raymo/Downloads/advanced-human-care`.
- Identidad Git: usar identidad histórica del commit inicial, configurada solo localmente.
- GitHub CLI autenticado y repo creado/verificado.

## Estado

Sesión Chrome de Cloudflare iniciada por el usuario. Repo visible en la integración existente sin modificar permisos. Configuración de proyecto preparada; creación y build inicial pendientes de verificar. No se ha cambiado el dominio ni el sitio legacy.

El repo está en fase de documentación/diseño. Base mínima Astro 7.3.8 preparada para probar la integración sin anticipar el diseño. Página de prueba con meta robots y cabecera X-Robots-Tag noindex/nofollow. Retirar esta restricción solo cuando corresponda publicar el sitio aprobado.

Node local 24.21.0, mismo valor configurado en `.node-version` y previsto en `NODE_VERSION` de Pages. `npm audit` final: 0 vulnerabilidades. Build local de Astro 7 bloqueado por Application Control sobre el binding nativo; no se modificaron protecciones. Astro 6.4.8 compiló en una prueba temporal, pero se descartó por vulnerabilidades; no usar ese build como prueba de la versión final. Verificación final pendiente del build remoto.

## Configuración prevista

- Cloudflare Pages mediante integración GitHub para la one-page Astro estática; confirmar la arquitectura del formulario antes de cerrar integración servidor.
- Repositorio objetivo exclusivamente `ramon-zerpa/advanced-human-care`; conservar permisos existentes de otros proyectos si se amplía la instalación GitHub.
- Producción: `main`; previews de ramas/PR según configuración acordada.
- Build Astro: `npm run build`; salida: `dist`; raíz del proyecto: `/`.
- Node 24.21.0 compatible con el requisito >=22.12.0 de Astro 7.3.8.
- Variables, bindings y secretos del formulario: pendientes de inspección; no inventar configuración ni publicar secretos.
- La verificación inicial será en el subdominio generado del nuevo proyecto. El dominio actual solo se conectará en la fase de publicación aprobada.
- No ejecutar `wrangler deploy`, `wrangler pages deploy`, `vercel deploy` ni comandos equivalentes. Publicar mediante commit/push y comprobar deploy automático.

## Evidencia necesaria para cerrar la conexión

1. Proyecto Cloudflare muestra repo y rama correctos.
2. Build/output correctos y configuración servidor documentada.
3. Push dispara build automático y deployment exitoso para el commit correspondiente.
4. URL pública del proyecto responde y corresponde al contenido de ese commit.

## Referencias oficiales

- https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
- https://developers.cloudflare.com/pages/configuration/build-configuration/
