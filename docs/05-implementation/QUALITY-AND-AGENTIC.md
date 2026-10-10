# Calidad, Agentic Browsing y rendimiento

2026-10-09. El usuario requiere incluir Agentic Browsing siempre, junto a Performance, Accessibility, Best Practices y SEO. Regla persistente en AGENTS.md. La categoría se mide por checks aprobados/aplicables, no como nota ponderada sobre 100. Si el proveedor no la soporta se informa expresamente, sin omitirla.

## Baseline publicado — 56b6a92

PSI Lighthouse 13.5.0: performance/accessibility/best-practices 100, SEO 58 en ambos dispositivos. LCP móvil 1501 ms, escritorio 321 ms; TBT 0 ms, CLS móvil 0 y escritorio 0,000192. Una ejecución estándar por dispositivo.

Agentic Browsing medido por separado: 2/4 en móvil y escritorio. Pasan agent-accessibility-tree y cumulative-layout-shift. Fallan llms-txt y ard-schema porque los archivos inexistentes devolvían HTML vía fallback SPA. Las tres comprobaciones WebMCP son notApplicable; no se contabilizan como fallos o aprobados.

## Cambios

- public/llms.txt: resumen navegable EN con enlaces, datos de clínica y estado real de formulario/español.
- public/.well-known/ard.json, anunciado por rel=ai-catalog: catálogo con una guía de navegación pública en formato Agent Skills Markdown. Public/agent-skills/clinic-information/SKILL.md es un documento público para localizar información, sin API de reservas ni registro WebMCP. Incluye exclusivamente información y rutas reales del sitio.
- Se usa la ruta actual ARD y un manifiesto compatible con el validador de Lighthouse 13.5.0. Ese validador conserva requisitos de una versión anterior; no se añaden certificaciones, identidades verificadas ni servicios inexistentes.
- public/robots.txt válido: mantiene Disallow: / durante la fase de preview. Se conserva noindex/nofollow. La indexación final y el dominio legacy permanecen fuera de este cambio.
- Astro build.inlineStylesheets=always: la pequeña hoja CSS de esta one-page pasa al HTML, suprimiendo una petición bloqueante y una cadena de carga. Sin nuevas dependencias ni CSS asíncrono que produzca flashes.
- Preload de Noto Sans 600: corresponde a una fuente realmente usada por menú y botones visibles; elimina su descubrimiento tardío mediante CSS.
- Foto principal del hero: tamaños responsive ajustados a columnas reales y variantes 640/1044 px añadidas. Calidad, encuadre y dimensiones CSS preservados. Variante 640 ~31 KB frente a 45 KB de la variante 800 descargada por PSI móvil en el baseline.

## Validación previa

Astro check: 0 errores, warnings e hints. Build exitoso. El HTML no contiene una hoja CSS externa bloqueante; contiene estilos inline y tres preloads de fuentes. Catálogo copiado a dist/.well-known/ard.json. Chrome local: hero y menú móvil funcionan, CTA conserva #contact-us, imágenes cargadas, sin overflow horizontal. No se cambia el contenido visual aprobado ni se habilita el formulario pendiente.

## Fuentes técnicas

- https://developer.chrome.com/docs/lighthouse/agentic-browsing/scoring
- https://docs.astro.build/en/guides/styling/#production
- https://github.com/GoogleChrome/lighthouse/issues/17251
- https://github.com/GoogleChrome/lighthouse/blob/v13.5.0/third-party/ard/ard.js

La verificación publicada y las mediciones posteriores se registran al completar el push y el deployment automático.
