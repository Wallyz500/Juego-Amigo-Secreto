// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

console.log(amigos);

function agregarAmigo() {
    let amigosAgregados = document.getElementById('amigo').value;
    amigos.push(amigosAgregados);
    limpiarTexto();
}

function limpiarTexto() {
    document.getElementById('amigo').value = '';
}