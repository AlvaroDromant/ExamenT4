import { mostrarResultado } from "./index.js"

class Vehiculo {
    #marca
    #modelo
    #color
    #fabricacion
    #cilindrada

constructor(marca, modelo, color, fabricacion, cilindrada){
    this.#marca = marca;
    this.#modelo = modelo;
    this.#color = color;
    this.#fabricacion = fabricacion;
    this.#cilindrada;
}

mostrarDatos(){
    const datos = `
    La marca es -> ${marca} <br>
    El modelo es -> ${modelo} <br>
    El color es -> ${color} <br>
    El año de fabricacion es -> ${fabricacion} <br>
    La cilindrada es -> ${cilindrada}
    `;

    mostrarResultado(`<p>${datos}</p>`)
}

acelerar(velocidad){
    const mensaje = `El coche ha acelerado hasta ${velocidad}`;
    mostrarResultado(`<p>${mensaje}</p>`);
}

arrancar(){
    const mensaje = `El coche de marca ${marca} y modelo ${modelo} ha arrancado`;
    mostrarResultado(`<p>${mensaje}</p>`);

}

frenar(){
    const mensaje = `El coche de marca ${marca} y modelo ${modelo} ha frenado`;
    mostrarResultado(`<p>${mensaje}</p>`);
}

get marca () {
  return this.#marca;
}

set marca (marca){
    this.#marca = marca;
}

get modelo (){
    return this.modelo;
}

set modelo (modelo){
    this.#modelo = modelo
}

get color (){
    return this.#color;
}

set color (color){
    this.#color = color;
}

get fabricacion(){
    return this.#fabricacion;
}

set fabricacion (fabricacion){
    this.#fabricacion = fabricacion;
}

get cilindrada(){
    return this.#cilindrada;
}

set cilindrada(cilindrada){
    this.#cilindrada = cilindrada;
}





}