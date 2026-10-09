# Advanced Human Care

Rediseño Astro one-page: inglés primero, español al completar y aprobar EN.

## Documentación

- [Brief y decisiones](PROJECT-BRIEF.md)
- [Descubrimiento del legacy](docs/01-discovery/VALIDATION-REPORT.md)
- [Estructura EN propuesta](docs/02-architecture/ONE-PAGE-STRUCTURE.md)
- [GitHub y Cloudflare](docs/03-infrastructure/DEPLOYMENT.md)

Logo original inmutable en `brand/reference/advanced-human-care-logo-original.png`.

Kit especializado disponible localmente en `.agents/skills` desde el kit Astro del usuario, sin instalaciones globales. Esta carpeta no se versiona.

Estado: documentación y diseño; base Astro 7.3.8 preparada solo para validar integración Git. La página inicial es una prueba de infraestructura con noindex, sin diseño del rediseño. Hosting confirmado en Cloudflare con integración GitHub y despliegue automático por push.

## Base técnica

Node 24.21.0. Instalar con `npm ci`; compilar con `npm run build`; salida `dist`.

El build local de Astro 7 está limitado por Application Control de Windows, que bloquea su binding nativo. No se alteraron las protecciones del equipo. La verificación del build final se realiza en Cloudflare. La prueba temporal de Astro 6 se descartó por vulnerabilidades detectadas; las dependencias finales de Astro 7.3.8 pasan `npm audit`.
Advanced Human Care redesign: Astro one-page, English first, Spanish final phase
