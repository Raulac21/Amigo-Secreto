<h1>🎁 Amigo Secreto</h1>
 <p>Este pequeño proyecto que permite agregar nombres a una lista de amigos y realizar un sorteo aleatorio para seleccionar uno de ellos como "el amigo secreto".</p>
</br>
<h1>🛠️ Tecnologías utilizadas</h1>
<li>HTML</li>
<li>JavaScript</li>
</br>
<h1> ✅ Funcionalidades</h1>
<ul>
<li>Agregar amigos a una lista sin repetir nombres.</li>
<li>No permitir enviar el campo nombre vacio</li>
<li>Mostrar la lista de amigos en pantalla.</li>
<li>Limpiar la lista visual (no elimina los datos, solo borra la visualización).</li>
<li>Sortear un amigo aleatorio de la lista y mostrarlo en pantalla.</li>
</ul>

<h1>📋 Descripción de las funciones</h1>

<strong> agregarAmigo() </strong> 
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Obtiene el valor del input con id amigo.</ol>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Verifica que el campo no esté vacío.</ol>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Verifica que el nombre no esté repetido.</ol>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Agrega el nombre a la lista listaamigos y lo muestra en pantalla.</ol>

<strong>mostrarAmigos()</strong>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Recorre el arreglo listaamigos y lo representa en la lista HTML mediante elementos.</ol>

<strong>limpiarlista()</strong>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Limpia el contenido visual de la lista mostrada en el DOM, pero no borra el arreglo original listaamigos.</ol>

<strong>sortearAmigo()</strong>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Si no hay elementos en listaamigos, muestra un mensaje de error.</ol>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Selecciona un amigo aleatoriamente con Math.random().</ol>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Limpia la lista visual con limpiarlista().</ol>
<ol>🏴󠁴󠁴󠁰󠁴󠁦󠁿Muestra al amigo sorteado en el contenedor con id amigosorteado.</ol>

<h1>🔄 Flujo de uso</h1>

<li>1.-El usuario ingresa un nombre en el campo de texto.</li>
<li>2.-Presiona el botón "Añadir".</li>
<li>3.-Se muestra la lista de nombres agregados.</li>
<li>4.-Al presionar el botón "Sortear amigo", se elige un nombre al azar y se muestra el resultado.</li>
<br/>
![Demo](https://github.com/Raulac21/Amigo-Secreto/raw/main/demo.gif)
<br/>
<br/>
<h1>✅ Mejoras posibles</h1>
<ol>✍️Agregar validación para evitar espacios vacíos o nombres duplicados por diferencia de mayúsculas/minúsculas.</ol>
<ol>✍️Permitir eliminar amigos de la lista.</ol>
