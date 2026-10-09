# Header: animaciones periódicas — prueba local

2026-10-09, rama codex/hero-scene-window. Sin push ni despliegue; continúa la revisión local del usuario.

Solo Header.astro añade CSS: teléfono desktop repite cada 4 segundos la elevación de 2 px, sombra y giro de -8 grados del icono que tenía en hover. Primer ciclo tras 4 segundos; reposo entre pulsos. Hover y foco mantienen su respuesta manual y suspenden el ciclo mientras están activos.

Logo: barrido diagonal blanco de 6 segundos con intervalo de reposo y primera ejecución tras 6 segundos. Referencia comprobada en el código local y en el pseudo-elemento publicado de Affordable Dave, https://www.affordableroofingflorida.com/. Gradient suave y blur fijo de 3.2 px; solo se animan transform y opacity. Capa pointer-events:none recortada dentro del enlace. El archivo original del logo conserva SHA256 38C16D49699619D52C227E8816E0FA261346E18773AF21EF171568807D22A60D.

Sin nuevas dependencias, scripts ni temporizadores. Movimiento reducido elimina ambos ciclos. El botón de teléfono desktop sigue oculto en móvil según diseño existente; el brillo del logo aplica en ambos tamaños.

Astro check sin errores/warnings/hints y build exitoso. Chrome desktop confirma duraciones 4s/6s, animación del icono y barrido cambiante del logo; enlace tel original y sin overflow horizontal. Revisión móvil a 390 px. La preferencia real de movimiento reducido no se cambió: se verificó su implementación CSS. Resto de componentes intactos.
