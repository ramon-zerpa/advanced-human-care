# IDs de títulos y rendimiento antes de español

2026-10-09, fecha local. Todos los cambios de esta entrega quedan en local, sin commit ni push. El usuario exige autorización expresa para cada push; la autorización de entregas anteriores no se reutiliza. Regla registrada en AGENTS.md.

## IDs

Heading.astro genera IDs desde el mismo texto que renderiza, mediante headingId. H1 del hero ya utiliza esa función; los demás H2/H3/H4 ahora usan el componente común. No se duplican cadenas de título y slug que puedan divergir al traducir. aria-labelledby deriva de las mismas constantes de título. Se mantienen las anclas de navegación de las secciones.

Verificación Chrome local: 35 títulos con ID, sin IDs duplicados, sin referencias aria-labelledby rotas, anclas de navegación conservadas y sin overflow horizontal. Astro check: 0 errores, warnings e hints. Build correcto.

Ejemplos de normalización comprobados, no traducciones nuevas publicadas:

- Rehabilitación De Lesiones En Tampa. → rehabilitacion-de-lesiones-en-tampa
- ¿Qué Puedo Esperar En Mi Primera Visita? → que-puedo-esperar-en-mi-primera-visita
- Niños, Atención Y Recuperación → ninos-atencion-y-recuperacion
- ¡Recupera Tu Movilidad! → recupera-tu-movilidad

La versión ES todavía no existe. Al construirla, sus IDs procederán del texto español real usando la misma función, sin reutilizar slugs ingleses.

## Medición publicada

Se midió https://advanced-human-care.pages.dev/ con código 0e28c76, posterior a las animaciones. Estas mediciones no incluyen las correcciones locales de IDs anteriores. PSI/Lighthouse 13.5.0: tres solicitudes estándar por dispositivo; tres timestamps independientes móvil y dos escritorio (runs 2/3 de escritorio devolvieron el mismo timestamp). El duplicado se excluye de las medianas. Agentic solicitado por separado en ambos dispositivos.

| Categoría | Móvil | Escritorio |
| --- | ---: | ---: |
| Rendimiento | 100 | 100 |
| Accesibilidad | 100 | 100 |
| Buenas prácticas | 100 | 100 |
| SEO | 66 | 66 |
| Agentic Browsing | 4/4 | 4/4 |

Agentic: accesibilidad para agentes, estabilidad, llms.txt y ARD pasan. Los tres checks WebMCP son no aplicables. SEO conserva bloqueo deliberado de indexación en preview.

| Métrica, mediana | Antes db1de36 móvil | Actual 0e28c76 móvil | Antes escritorio | Actual escritorio |
| --- | ---: | ---: | ---: | ---: |
| LCP | 1351 ms | 1351 ms | 321,5 ms | 341,5 ms |
| FCP | 785 ms | 919 ms | 223 ms | 263 ms |
| TBT | 0 ms | 0 ms | 0 ms | 0 ms |
| CLS | 0 | 0 | 0,000096 | 0 |

No se detectaron diferencias de versión/settings ni fallos de ejecución. El FCP aumentó 134 ms en móvil y 40 ms en escritorio en esta comparación; no se afirma que todos los tiempos sean idénticos ni que la diferencia esté causada por la animación. Rendimiento sigue 100, LCP móvil estable y no hay bloqueo ni desplazamiento de layout medidos. Son pruebas de carga de laboratorio, no datos CrUX ni una certificación de todos los desplazamientos al hacer scroll. Podemos avanzar con ES en local y volver a medir ambas versiones al finalizar.

Artefactos completos: carpetas de visualizaciones pagespeed-0e28c76 y agentic-0e28c76; comparación en pagespeed-0e28c76/comparison.json. No se aplican optimizaciones nuevas ni se publica nada en esta entrega.

## Autorización posterior

El usuario autorizó expresamente el commit y push de estos cambios después de la revisión local. Se publican mediante la integración GitHub–Cloudflare existente. La versión española queda para la próxima sesión. Esta autorización corresponde únicamente a esta entrega.
