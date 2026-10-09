# Séptima entrega — contacto y footer

Fecha: 2026-10-09. El usuario autoriza completar de una vez los dos bloques pendientes del diseño en Pencil. La implementación en Astro y la versión española siguen como fases posteriores.

## Sección 08 — Contact And Appointment

Título Start Your Recovery. Escritorio: datos de contacto y mapa a la izquierda, formulario a la derecha. Móvil: contenido apilado, etiquetas visibles y controles completos. Canvas en la sección, formulario blanco y bordes funcionales #738578.

Datos oficiales del legacy: 3558 N 29th St, Tampa, FL 33605; (813) 542-3613; info@advancedhuman.care; Mon–Fri 9am–5pm; fax (813) 200-3496. El mapa es una vista provisional explícita, con acción Open in Google Maps; el mapa real se integrará en Astro con esa dirección.

Formulario: Full name, Email y Phone obligatorios; Desired date y Message opcionales. Turnstile tiene un espacio reservado, sin simular una verificación aprobada. Botón Send appointment request.

Contrato a preservar en Astro: POST al mismo origen /api/contact con FormData; name máximo 100, email máximo 254, phone máximo 30, date opcional, message máximo 2000 y token Turnstile. Respuestas JSON success y errores verification_required, verification_failed, missing_fields e invalid_fields. Deshabilitar el botón mientras se envía; informar del resultado de forma accesible; reiniciar campos solamente tras éxito y reiniciar Turnstile según el flujo existente. El éxito comunica recepción de la solicitud, sin afirmar que la cita esté confirmada. Ante fallo de red o servidor, permitir reintentar y ofrecer el teléfono.

El diseño no valida aún credenciales, proveedor, bindings ni funcionamiento del backend. La configuración real y las pruebas de envío pertenecen a Astro. Ajustar el tamaño real de Turnstile a los anchos móviles y reservar su espacio para evitar desplazamientos.

## Footer

Fondo Forest. Logo original intacto sobre superficie blanca. Descripción breve, navegación interna, teléfono, email, dirección y horario. Copyright 2026, language switcher y acción Back to top. Escritorio en columnas; móvil apilado. Español sigue pendiente al final del proyecto: el switcher es una referencia visual, sin enlazar a la versión legacy incompleta. No se inventan páginas legales.

## Entrega

Frames de contacto dtTyw y cdAV5; footer N5WZ7X y fYxHD. Inspección visual de los cuatro bloques realizada, con corrección de los sufijos Mobile que aparecían en las etiquetas del formulario.

Exportaciones PNG a escala 1 en pencil-design/exports/phase-07-contact-footer/: cuatro bloques individuales y páginas completas O8VDD.png / kbGBM.png. Archivo editable pencil-design/advanced-human-care.pen guardado mediante Pencil.

La composición inglesa completa incluye header, hero, lesiones, tratamientos, apoyo durante el proceso, equipo, recuperación/testimonios, preguntas frecuentes, contacto y footer. Se conservan los cambios aprobados de tipografía, botones, colores, horarios e iconos y el testimonio de Emily sin el cierre Thank you so much! No se generan imágenes adicionales al lote inicial de tres. Próxima fase: revisión del conjunto y traslado a Astro.
