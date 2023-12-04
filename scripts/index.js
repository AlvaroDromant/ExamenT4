const resultadocontainer = document.createElement('div');
document.body.appendChild(resultadocontainer);

function mostrarResultado(mensaje){
 resultadocontainer.innerHTML = `<p>${mensaje}</p>`
}