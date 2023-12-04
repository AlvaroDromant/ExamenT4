import { mostrarResultado } from "./index.js"

export class Vehiculo {
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
    this.#cilindrada = cilindrada;
}

mostrarDatos(){
    const datos = `
    La marca es -> ${this.#marca} <br>
    El modelo es -> ${this.#modelo} <br>
    El color es -> ${this.#color} <br>
    El año de fabricacion es -> ${this.#fabricacion} <br>
    La cilindrada es -> ${this.#cilindrada}
    `;

    mostrarResultado(`<p>${datos}</p>`)
}

acelerar(velocidad){
    const mensaje = `El coche ha acelerado hasta ${velocidad}`;
    mostrarResultado(`<p>${mensaje}</p>`);
}

arrancar(){
    const mensaje = `El coche de marca ${this.#marca} y modelo ${this.#modelo} ha arrancado`;
    mostrarResultado(`<p>${mensaje}</p>`);

}

frenar(){
    const mensaje = `El coche de marca ${this.#marca} y modelo ${this.#modelo} ha frenado`;
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