# Advanced Human Care

Rediseño Astro one-page: inglés primero, español al completar y aprobar EN.

## Documentación

- [Brief y decisiones](PROJECT-BRIEF.md)
- [Descubrimiento del legacy](docs/01-discovery/VALIDATION-REPORT.md)
- [Estructura EN](docs/02-architecture/ONE-PAGE-STRUCTURE.md)
- [GitHub y Cloudflare](docs/03-infrastructure/DEPLOYMENT.md)
- [Implementación EN y verificaciones](docs/05-implementation/EN-PREVIEW.md)
- [Punto de recuperación antes de las pruebas](docs/05-implementation/CHECKPOINT-BEFORE-TESTS.md)

Logo original inmutable en `brand/reference/advanced-human-care-logo-original.png`.

Kit especializado disponible localmente en `.agents/skills` desde el kit Astro del usuario, sin instalaciones globales. Esta carpeta no se versiona.

Estado al 2026-10-09: diseño Pencil aprobado y one-page EN implementada en Astro. El usuario acepta el frontend actual como base para las siguientes pruebas. Vista verificada: https://c1b9da74.advanced-human-care.pages.dev/. Rama de trabajo: `codex/english-implementation`; producción sigue en `main`, sin sustituir el legacy. Cloudflare publica automáticamente desde GitHub. La vista conserva noindex/nofollow.

El formulario conserva su interfaz y contrato público, pero su backend permanece pendiente por indicación del usuario. Sin configuración de Turnstile, el envío está deshabilitado y se ofrece llamar. Español se hará al completar y aprobar EN.

## Base técnica

Node 24.21.0 y Astro 7.3.8. Instalar con `npm ci`; desarrollar con `npm run dev`; validar con `npm run check`; compilar con `npm run build`; salida `dist`. Vista del build local: `npm run preview -- --host 127.0.0.1 --port 4321`.

El build y la comprobación Astro pasan localmente. El bloqueo anterior del binding nativo de Windows no se reproduce; no se alteraron las protecciones del equipo. Evidencia y límites de las comprobaciones en la documentación de implementación.

Diseño editable e imágenes fuente guardados en `pencil-design/`; logo original inmutable. Las exportaciones históricas de Pencil permanecen locales e ignoradas en Git.
