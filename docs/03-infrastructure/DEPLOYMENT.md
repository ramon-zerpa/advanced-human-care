# GitHub y Cloudflare

## Confirmado

- Usuario autoriza crear repo y conectarlo a su cuenta Cloudflare con despliegue automático desde GitHub.
- Repo privado: https://github.com/ramon-zerpa/advanced-human-care.
- Rama principal: `main`.
- Proyecto local: `C:/Users/raymo/Downloads/advanced-human-care`.
- Identidad Git: usar identidad histórica del commit inicial, configurada solo localmente.
- GitHub CLI autenticado y repo creado/verificado.

## Estado

La sesión Chrome de Cloudflare muestra login. Se solicita al usuario iniciar sesión en la pestaña abierta. Todavía no se ha creado ni conectado un proyecto Cloudflare para este repo. No se ha cambiado el dominio ni el sitio legacy.

El repo está en fase de documentación/diseño: todavía no contiene aplicación Astro ni comando de build. No configurar como listo un build que aún no existe. La base técnica podrá prepararse para verificar la integración sin anticipar el diseño de la web.

## Configuración prevista

- Cloudflare Pages mediante integración GitHub para la one-page Astro estática; confirmar la arquitectura del formulario antes de cerrar integración servidor.
- Repositorio objetivo exclusivamente `ramon-zerpa/advanced-human-care`; conservar permisos existentes de otros proyectos si se amplía la instalación GitHub.
- Producción: `main`; previews de ramas/PR según configuración acordada.
- Build Astro: `npm run build`; salida: `dist`; raíz del proyecto: `/`.
- Versión Node compatible con la versión Astro instalada, a verificar al preparar el runtime.
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
