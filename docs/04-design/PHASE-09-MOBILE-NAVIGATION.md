# Ajustes — hero, bottom bar y menú móvil

Fecha: 2026-10-09. Cambios explícitos del usuario que sustituyen las decisiones anteriores correspondientes.

- Eliminar el language switcher de la barra inferior en escritorio y móvil. Conservar copyright y Back to top sobre el degradado aprobado.
- Frase Get Your Lifestyle Back. del hero y su icono: Forest #174A3A, igual que los otros títulos, en ambas versiones. Se conserva la separación de la imagen.
- Móvil: dirección y horario alineados a la izquierda, con sus iconos, en filas separadas.
- Móvil: eliminar el selector EN/ES de la navegación cerrada; ubicarlo dentro del menú desplegado. Botón de menú 44×44, fondo Forest, icono blanco y radio 8. Estado abierto muestra icono de cierre.

Referencia de menú móvil desplegado MFuwU, separada de la página principal, con los cuatro enlaces aprobados y el selector al final. En Astro implementar apertura/cierre, aria-expanded, aria-controls, enfoque visible y cierre con Escape; la versión española se sigue preparando al final, sin enlazar al legacy incompleto.

Se inspeccionaron visualmente hero, alineación de datos, header móvil, bottom bars y menú desplegado. Exportaciones vigentes: pencil-design/exports/phase-09-mobile-navigation/, incluyendo páginas completas O8VDD.png y kbGBM.png y menú MFuwU.png. Los ejemplos anteriores de footer/mobile header son históricos.

## Ajuste posterior del menú desplegado

Se elimina la etiqueta Language. En la fila inferior jq4YS queda el switcher EN/ES a la izquierda y el CTA Request an appointment k4guZY a la derecha, con el mismo degradado, radio y sombra de los botones aprobados. Altura 44 px y texto 14 px para encajar en la fila móvil. Inspección visual a 390 px realizada. En Astro verificar el ancho mínimo móvil y adaptar la fila si fuera necesario para evitar desbordamiento. Exportación vigente del menú: pencil-design/exports/phase-10-menu-appointment/MFuwU.png; sustituye su captura anterior. CTA debe cerrar el menú y llevar a #contact-us.
