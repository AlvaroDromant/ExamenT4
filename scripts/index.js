const resultadocontainer = document.createElement('div');
document.body.appendChild(resultadocontainer);

export function mostrarResultado(mensaje){
 resultadocontainer.innerHTML = `<p>${mensaje}</p>`
}