# Kamo Idiomas: app instalable, sin IA y sin costo

Esta carpeta es la app completa. No necesita servidor, clave ni pagos: los cursos de inglés y portugués vienen escritos dentro. Se publica igual que Guaca.

## Qué trae

- Dos cursos para hispanohablantes, inglés, portugués de Brasil e italiano: 5 niveles (A1 a C1) y 60 lecciones cada uno. Cada idioma tiene su test inicial y guarda su avance por separado.
- Cada lección explica el tema, hace practicar (elegir, armar frases, escribir) y cierra con una comprobación.
- Test inicial que ubica el nivel, prueba para subir de nivel y repaso espaciado de lo que se falla.
- Kamo animado, sonidos y audio de los ejemplos con la voz del celular.
- Funciona sin internet después de abrirla una vez.

## Qué no trae

- Conversación libre, lecturas nuevas ni corrección de textos libres: eso necesita IA y sigue disponible en la versión dentro de Claude.
- Otros idiomas: por ahora inglés, portugués e italiano. Se cambia de idioma en Personalizar.
- Al escribir, si faltan tildes la respuesta cuenta como buena y Kamo muestra la forma correcta.
- Para actualizar una versión ya publicada: reemplaza todos los archivos del repositorio por los de esta carpeta; el avance guardado en el celular se conserva.

## Cómo publicarla en GitHub Pages

1. Crea un repositorio nuevo en GitHub, por ejemplo `Kamo-App`.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio (incluido `.nojekyll`).
3. En el repositorio entra a Settings, luego Pages, y en "Branch" elige `main` y la carpeta `/ (root)`. Guarda.
4. En un par de minutos GitHub te da la dirección, del estilo `https://tu-usuario.github.io/Kamo-App/`.

## Cómo instalarla en el celular

- iPhone: abre la dirección en Safari, toca Compartir y elige "Agregar a pantalla de inicio".
- Android: ábrela en Chrome, abre el menú y elige "Instalar app" o "Agregar a pantalla principal".

## Cosas que debes saber

- El progreso se guarda en cada celular. Si alguien borra los datos del navegador o cambia de equipo, empieza de nuevo.
- Las respuestas escritas se comparan con las formas correctas previstas. Acepta contracciones y un error pequeño de ortografía, pero una frase correcta dicha de otra manera puede marcarse como incorrecta; en ese caso muestra la forma esperada.
- Para actualizar la app, reemplaza los archivos en el repositorio. Los celulares toman la versión nueva la siguiente vez que la abran con internet.

## Sonido

- Funciona igual en iPhone y Android. Los celulares solo dejan sonar una página después de un toque: por eso la app abre con Kamo dormido y un botón para despertarlo.
- En iPhone suena aunque el interruptor lateral esté en silencio; solo hay que subir el volumen con los botones.
- Se apaga o enciende en Personalizar, «Sonidos de la app».

## Curso completo con código

- El nivel A1 es gratis. De A2 a C1 se abre con un código que solo sirve en el celular del comprador.
- El comprador ve su «número de equipo» en la app y te lo envía por WhatsApp. Tú creas el código con la página privada `kamo-codigos.html` y se lo respondes.
- `kamo-codigos.html` NO va en este repositorio: guárdala solo en tus equipos.
- Si el comprador cambia de celular, reinstala la app o borra los datos del navegador, su número cambia y necesita un código nuevo.
- El link de pago y el precio se ponen en `index.html`, en la línea `const SHOP={…}` (campos `pay` y `price`).

## Cuentas y avance en la nube

- Con una cuenta (correo y contraseña) el avance se guarda en la nube y aparece en cualquier celular o tablet donde la persona entre.
- Se activa poniendo los datos del proyecto de Firebase en `index.html`, en la línea `const CLOUD={…}` (apiKey y dirección de Realtime Database). Mientras estén vacíos, la app funciona solo en cada equipo.
- Con cuenta, el código de desbloqueo se pide con el «número de cuenta» y sirve en todos los equipos de esa persona.
