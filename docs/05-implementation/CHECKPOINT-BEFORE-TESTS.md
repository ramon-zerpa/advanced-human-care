# Punto de recuperación antes de las pruebas

Fecha: 2026-10-09. El usuario acepta el estado actual y solicita guardarlo antes de realizar nuevas pruebas. Este documento registra la base conservada; no autoriza cambios visuales adicionales ni lanzamiento.

## Base guardada

- Repositorio privado: https://github.com/ramon-zerpa/advanced-human-care.
- Rama: `codex/english-implementation`. Implementación: commit `0eea8bd`; evidencia de despliegue y verificador: `ed4be1a`. El commit que añade este documento constituye el checkpoint documental previo a las pruebas.
- Preview público verificado: https://c1b9da74.advanced-human-care.pages.dev/. Es una URL de deployment fijo para comparar las siguientes pruebas con esta base.
- Diseño aprobado: `pencil-design/advanced-human-care.pen`. Biblioteca de imágenes fuente versionada en `pencil-design/images/`; exportaciones históricas conservadas localmente y excluidas de Git.
- Logo original conservado sin cambios. Títulos Lora 600 italic en Capitalize y cuerpo Noto Sans. Paleta y componentes aprobados reflejados en Astro.
- One-page EN completa: header, hero, lesiones, tratamientos, apoyo/documentación, equipo, recuperación/testimonios, primera visita/FAQ, contacto y bottom bar.

## Estado funcional y límites

El usuario revisó el frontend y lo considera una base adecuada para continuar. El diseño Pencil está aprobado; la imagen de espalda v4 permanece por decisión expresa del usuario. No se generarán más imágenes sin una nueva necesidad autorizada.

El formulario conserva los campos y contrato público, pero el backend, secretos y recepción real permanecen pendientes por indicación del usuario. Sin clave pública Turnstile, el envío se mantiene deshabilitado y se ofrece llamar; no se muestran confirmaciones ficticias. No se hicieron envíos reales.

Español se implementará al completar y aprobar EN. El selector ES permanece deshabilitado. Calidad final, SEO y rendimiento siguen pendientes de cierre; las verificaciones existentes no equivalen a auditoría WCAG, Lighthouse o Safari/iPhone.

Producción continúa en `main` con la base inicial. Dominio legacy sin cambios; preview noindex/nofollow. Todos los despliegues se realizan automáticamente por GitHub. Este checkpoint no incluye merge a main, conexión del dominio ni despliegue manual.

## Verificaciones conservadas

Astro check y build local exitosos; build remoto exitoso; preview HTTP 200 y assets comprobados; logo idéntico al original. Chrome revisado a 320, 390, 768, 1120 y 1440 px sin desbordamiento horizontal. Navegación móvil, Escape, foco y validación nativa revisados.

Los breakpoints exactos y las evidencias están en [EN-PREVIEW.md](EN-PREVIEW.md). La configuración de GitHub/Cloudflare está en [DEPLOYMENT.md](../03-infrastructure/DEPLOYMENT.md).

## Retomar

Revisar el estado Git antes de cualquier cambio y usar este commit como referencia de comparación. Para una vista local del build: `npm run preview -- --host 127.0.0.1 --port 4321`. Las siguientes pruebas quedan a la espera de las instrucciones del usuario; no se anticipan cambios a esta base.
