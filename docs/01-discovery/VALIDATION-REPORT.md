# Descubrimiento del legacy

Fecha: 2026-10-08. Alcance: inventario público de rutas, contrato visible del formulario y contexto de dos competidores. No es una auditoría completa SEO, visual o de rendimiento; no se han medido Lighthouse/CrUX ni probado envíos reales.

## Sitemap y rutas — confirmado

Lectura directa mediante HTTP:

- https://www.advancedhuman.care/robots.txt responde 200, permite rastreo y declara https://www.advancedhuman.care/sitemap-index.xml.
- `sitemap-index.xml` responde 200 y referencia `sitemap-0.xml`.
- `sitemap.xml` también responde 200 como índice del mismo `sitemap-0.xml`.
- `sitemap-0.xml` es XML válido con exactamente dos URLs: https://www.advancedhuman.care/ y https://www.advancedhuman.care/es/. Ambas responden 200.
- `/sitemap_index.xml` (con guion bajo) responde 404; es una alternativa de descubrimiento, no el sitemap declarado y no supone un problema confirmado.
- Los enlaces internos de navegación EN apuntan a `/#treatments`, `/#about-us`, `/#testimonials`, `/#contact-us` y `#top`, además del cambio de idioma. No se observaron enlaces a otras páginas de contenido.

Conclusión: el inventario publicado respalda una one-page por idioma. No se encontraron páginas adicionales en el sitemap ni en la navegación EN. Esto no demuestra la inexistencia de rutas huérfanas, privadas o no indexadas; comprobar el repositorio/despliegue legacy o Search Console si se requiere cerrar ese inventario.

## Formulario — contrato confirmado, backend pendiente

Fuente: HTML y comportamiento declarado por los scripts públicos de https://www.advancedhuman.care/. Inspección de referencia, sin reutilización de código y sin enviar solicitudes de cita.

| Campo | Nombre de envío | Requisito visible |
|---|---|---|
| Nombre | `name` | Obligatorio, máximo 100 caracteres |
| Email | `email` | Obligatorio, máximo 254 caracteres |
| Teléfono | `phone` | Obligatorio, máximo 30 caracteres |
| Fecha deseada | `date` | Opcional, entrada tipo date |
| Mensaje | `message` | Opcional, máximo 2000 caracteres |
| Verificación | token de Cloudflare Turnstile | Widget en inglés; verificar contrato servidor |

- Método POST hacia `/api/contact` en el mismo origen. Envío mediante FormData.
- Respuesta esperada JSON con `success`; errores por `code`: `verification_required`, `verification_failed`, `missing_fields`, `invalid_fields`.
- Estado de envío: botón deshabilitado mientras se envía; confirmación/error visible; limpieza de campos tras éxito; reactivación del botón y reinicio de Turnstile al concluir.
- Turnstile y mapa se cargan al aproximarse la sección de contacto al viewport. Mantener carga diferida equivalente y validar que la verificación esté disponible antes de enviar.
- El endpoint relativo deberá existir y estar configurado en el nuevo despliegue. Recrear la interfaz no garantiza entrega de mensajes.
- Pendientes del servidor: implementación/configuración de `/api/contact`, validaciones, secreto Turnstile, dominios autorizados del widget, proveedor y destinatarios, bindings/variables y límites de abuso. No incorporar secretos a documentación ni al cliente.
- Pruebas posteriores: obligatorios, datos inválidos, Turnstile, errores de red/servidor, envío exitoso y recepción real de una solicitud de prueba identificada.

## Contenido vigente

La lectura directa EN presenta cuatro áreas de dolor: whiplash, back, knee, shoulder; ocho tratamientos; documentación para abogado; seguro/medical lien; equipo; clínica; recuperación; testimonios y contacto.

El bloque del equipo muestra Ronald L. Panella (Medical Director), Lorena Lago Alonso (President), Alex A. Benitez (Vice President), Cynthia Bohannon (Chiropractor) y Niuvis Alonso Paez (Chiropractic Assistant). Confirmar vigencia con el negocio antes de aprobar copy final; algunos resultados indexados conservan otra información.

Dirección en HTML visible, mapa y datos estructurados actuales: **3558 N 29th St, Tampa, FL 33605**. El usuario confirmó como oficial la dirección del website legacy; esta es la dirección aprobada para el rediseño. Algunos resultados indexados muestran **8208 W Waters Ave, Tampa, FL 33615**; no usar esa dirección antigua.

Teléfono observado: (813) 542-3613. Email: info@advancedhuman.care. Horario observado: lunes a viernes, 9am–5pm. Confirmar estos datos junto con la dirección.

## Logo protegido

Fuente: https://www.advancedhuman.care/images/Main-Logo-Advanced-Human-Care-min.png.

Archivo: `brand/reference/advanced-human-care-logo-original.png`.
SHA256: `38C16D49699619D52C227E8816E0FA261346E18773AF21EF171568807D22A60D`.

Conservar proporción, colores y composición originales. No regenerar ni reinterpretar el logo.

## Dos competidores — contexto de contenido y conversión

### HC Rehabilitation Center

Fuente: https://hcrehabcenter.com/.

Publica servicios de rehabilitación por accidentes y atención quiropráctica en Tampa. Su página destaca vías de contacto, ubicación y un proceso de atención en cuatro pasos. Su oferta es más amplia que la de AHC.

Inferencia para nuestra propuesta: explicar brevemente qué ocurre después de solicitar una cita puede reducir incertidumbre. No trasladar sus cifras, servicios adicionales, disponibilidad inmediata ni condiciones de seguros a AHC.

### Accident Injury Doctors

Fuente: https://accidentinjurydrs.com/.

Publica atención tras accidentes en Tampa y Brandon. Organiza servicios y lesiones, destaca contacto telefónico, equipo y ubicaciones, y enlaza recursos para pacientes.

Inferencia para nuestra propuesta: hacer fácil reconocer el tipo de lesión, localizar el equipo y contactar a la clínica. En AHC esto se resolverá dentro de la one-page. No copiar sus afirmaciones clínicas, legales, horarios o servicios.

## Acciones

1. Usar dirección aprobada del legacy actual; confirmar el resto de datos del negocio antes de cerrar copy.
2. Preservar todos los temas y servicios principales, campos y recorrido de contacto.
3. Aprobar estructura EN antes de diseñar; nueva identidad subordinada al logo inmutable.
4. Obtener configuración backend antes de reconstruir/verificar la integración del formulario.
5. Completar línea base visual y rendimiento antes de cerrar criterios técnicos de aceptación. No atribuir fallos al sitio por errores del lector web: robots y sitemap se verificaron directamente después de esos errores.
