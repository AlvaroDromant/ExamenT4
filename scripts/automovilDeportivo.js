import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./index.js";

class VehiculoDeportivo extends Vehiculo{
    #potencia

 constructor(marca, modelo, color, fabricacion, cilindrada, potencia){
    super(marca, modelo, color, fabricacion, cilindrada)
    this.#potencia = potencia
 }

mostrarDatos(){

   super.mostrarDatos()

   const mensajeDeportivo = `La potencia del motor este superdeportivo es de ${potencia}`;
   mostrarResultado (`<p>${mensajeDeportivo}</p>`);

}

get potencia(){
    return this.#potencia;
}

set potencia (potencia){
    this.#potencia = potencia;
}






}