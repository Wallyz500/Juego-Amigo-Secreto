// Crear la lista
let amigos = [];

//Crear la funcion para agregar nombres a la lista
function agregarAmigo() {
    let amigosAgregados = document.getElementById('amigo').value;

    if (!amigosAgregados) {
        alert('Porfavor, inserte un nombre.');
        return;
    }
    amigos.push(amigosAgregados);
    limpiarTexto();
    listaAmigos();
}

//Limpieza del texto escrito
function limpiarTexto() {
    document.getElementById('amigo').value = '';
}

//Crear la lista de nombres para sortear
function listaAmigos() {
    let sorteoPersonas = document.getElementById('listaAmigos');
    sorteoPersonas.innerHTML = '';

    for (let lista = 0; lista < amigos.length; lista++) {
        let personas = document.createElement('li');
        personas.textContent = amigos[lista];
        sorteoPersonas.appendChild(personas);
    }
}

//Sorteo del amigo secreto
function sortearAmigo() {
    if (amigos < 3) {
        alert('Se requiere un minimo de 3 personas para sortear.');
        return;
    }
    let sorteoAmigos = amigos[Math.floor(Math.random()* amigos.length)];
    let amigoSorteado = document.getElementById('resultado');
    amigoSorteado.innerHTML = `El amigo secreto es: ${sorteoAmigos}`;
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}