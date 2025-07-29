let listaamigos = [];

function limpiar() {
    document.querySelector('#amigo').value = '';
    let s = document.getElementById('amigosorteado');
    s.innerHTML = '';
}

function limpiarlista(){
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
}

function agregarAmigo(){
    let amigo = document.getElementById('amigo').value;

     if (amigo === ''){
        alert('Por favor, inserte un nombre.');        
        return;
    }

     if (listaamigos.includes(amigo)){
        alert('Ese Amigo Ya Lo Agregaste'); 
        limpiar();
        return;       

    }
        listaamigos.push(amigo); //agregar a la lista
        console.log(listaamigos); // ver amigos en consola
        limpiar();
        mostrarAmigos(); //mostrar lista
    
 }
 function mostrarAmigos(){
    
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    listaamigos.forEach(function(amigos) {
    lista.innerHTML += `<li>${amigos}</li>`;});
}

  function sortearAmigo(){
    let resultado = document.getElementById('amigosorteado');

    if (listaamigos.length === 0) {
    resultado.innerHTML = 'No hay amigos para sortear.';
    return;
  }

  let amigoAleatorio = Math.floor(Math.random() * listaamigos.length);
  let amigoSorteado = listaamigos[amigoAleatorio];
  limpiarlista(); //Quitar lista 

  resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

}