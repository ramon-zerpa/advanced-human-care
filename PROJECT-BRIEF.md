# Advanced Human Care — inicio del rediseño

Estado: alcance confirmado por el usuario; diagnóstico de rutas y contrato público del formulario completado. Arquitectura y diseño pendientes de aprobación.
Fecha: 2026-10-08.

## Base comprobada

- Sitio de referencia: https://www.advancedhuman.care/ y https://www.advancedhuman.care/es/.
- El contenido publicado presenta una clínica de rehabilitación de lesiones por accidentes de auto en Tampa, Florida.
- Existen versiones EN/ES, tratamientos, información del equipo, testimonios y contacto con solicitud de cita.
- La revisión inicial de contenido encontró diferencias entre las versiones recuperadas del bloque del equipo. Confirmar nombres, cargos y contenido vigente con el negocio.
- La carpeta de trabajo estaba vacía al comenzar. Todavía no existe un repositorio Git ni una aplicación Astro en esta carpeta.
- Kit del proyecto copiado desde `C:/Users/raymo/Downloads/astro-skill-kit/.agents/skills` a `.agents/skills`, con verificación de hashes.
- Esta revisión es preliminar: no constituye una auditoría visual, SEO completa ni medición de rendimiento.

## Decisiones para completar el brief

1. Objetivo principal: llamadas, solicitudes de cita, reservas u otro resultado; problema principal del sitio actual.
2. Alcance: idiomas de lanzamiento, servicios y público prioritarios, estructura de una página o varias.
3. Identidad: logo y colores que deben conservarse, libertad del rediseño y referencias visuales.
4. Contenido: información vigente del equipo, tratamientos, ubicación, horarios, fotos, testimonios y condiciones de atención. Confirmar el contenido clínico y de seguros con el negocio.
5. Conversión: destino de formularios, sistema de agenda/CRM e integraciones existentes.
6. Publicación: elección explícita entre Cloudflare y Vercel, repositorio GitHub y gestión del dominio actual.

## Alcance confirmado por el usuario

- One-page, con navegación a secciones. No crear páginas adicionales de servicios.
- Trabajar primero únicamente en inglés. Completar español al final, cuando EN esté al 100% y aprobado. Preparar arquitectura localizable sin producir ES anticipadamente.
- Mantener al menos el 80% del contenido y la dinámica del sitio actual. Margen máximo aproximado del 20% para adaptar contenido al diseño y aportar utilidad SEO/CRO. Documentar lo conservado, reformulado y agregado; no interpretar el porcentaje como permiso para eliminar servicios o datos del negocio.
- Logo inmutable. Archivo original descargado sin alteración en `brand/reference/advanced-human-care-logo-original.png`.
- Proponer desde cero colores, tipografías, iconografía y el resto del sistema visual, tomando el logo como referencia.
- Imágenes nuevas generadas cuando llegue la fase correspondiente: primeras tres solamente; usar placeholders para las restantes hasta su sustitución posterior.
- Reconstruir todo el sitio desde cero. No reutilizar código, estilos ni componentes legacy. La inspección del HTML se limita a contenido y contratos funcionales.
- Conservar el funcionamiento del formulario con Cloudflare, sus campos y su validación. La equivalencia completa requiere verificar el backend y su configuración antes del lanzamiento.
- Investigar dos competidores como contexto, sin copiar sus contenidos ni trasladar sus servicios o promesas a este negocio.
- Contenido nuevo orientado a resolver dudas, aportar contexto local y facilitar llamadas/solicitudes. No inventar testimonios, credenciales, garantías, servicios ni condiciones de seguros.

## Evidencia y propuesta

Ver `docs/01-discovery/VALIDATION-REPORT.md` para sitemap, formulario y competidores, y `docs/02-architecture/ONE-PAGE-STRUCTURE.md` para la propuesta de estructura.

Dirección oficial confirmada por el usuario: **3558 N 29th St, Tampa, FL 33605**, tal como figura actualmente en el website legacy. Cloudflare confirmado como plataforma; el usuario autoriza crear el nuevo repositorio y conectarlo con despliegue automático desde GitHub.

Repositorio privado creado: https://github.com/ramon-zerpa/advanced-human-care, rama `main`. Conexión a Cloudflare pendiente de inicio de sesión en el navegador y configuración del proyecto. Pendiente también revisar el backend del formulario. Ver `docs/03-infrastructure/DEPLOYMENT.md`.

## Fases propuestas

### 01 — Brief y diagnóstico

Completar decisiones del negocio. Inventariar URLs EN/ES, contenidos, imágenes, formularios e integraciones. Revisar experiencia móvil y escritorio, SEO y rendimiento del sitio actual. Diferenciar observaciones, mediciones e hipótesis. Entregable: diagnóstico priorizado y brief para revisión.

### 02 — Arquitectura y contenido

Definir mapa de páginas, navegación, recorrido hacia la cita y contenido de cada sección. Preparar equivalencia EN/ES si se confirma el alcance bilingüe y plan de conservación de URLs/redirecciones. Entregable: arquitectura y contenido para aprobación.

### 03 — Dirección UX/UI y diseño

Usar `ui-ux-pro-max` para el brief visual y Pencil MCP para diseños concretos de escritorio y móvil. Revisar con `impeccable` y `web-design-guidelines`. El diseño aprobado será la referencia visual de implementación. La disponibilidad de Pencil en esta sesión debe verificarse antes de comenzar esta fase.

### 04 — Especificación e implementación Astro

Documentar componentes, rutas, formularios, integraciones y criterios de aceptación. Implementar después de aprobar diseño y alcance: HTML semántico, accesibilidad, imágenes y fuentes optimizadas, JavaScript mínimo e hidratación solo donde aporte valor. `perf-astro` guía el rendimiento; verificar las técnicas contra la documentación Astro vigente.

### 05 — Verificación

Comprobar contenido, navegación, formularios, responsive y experiencia de ambos idiomas. Medir con `performance` y `core-web-vitals`; revisar SEO con `seo`, revisión ligera con `web-quality-seo` y cierre transversal con `web-quality-audit`. Aplicar `accessibility` para la evaluación WCAG acordada. Acordar objetivos cuantitativos tras la línea base, sin prometer puntuaciones antes de medir.

### 06 — Publicación y evidencia

Configurar la integración GitHub de la plataforma elegida, build/output y variables necesarias. Publicar mediante push y deploy automático. Verificar el resultado público: URLs, contenido, assets, formularios y redirecciones. Sin deploy manual salvo solicitud explícita. Configurar identidad Git únicamente local al repositorio si hace falta.

## Próximo paso

Completar conexión GitHub–Cloudflare cuando esté disponible la sesión. Revisar la propuesta de estructura EN y preparar el brand-board con `ui-ux-pro-max` y Pencil antes de diseñar la one-page. No generar imágenes todavía.
