import { Vehiculo } from "./vehiculo.js";
import { VehiculoDeportivo } from "./automovilDeportivo.js";

const resultadocontainer = document.createElement('div');
document.body.appendChild(resultadocontainer);

export function mostrarResultado(mensaje){
 resultadocontainer.innerHTML += `<p>${mensaje}</p>`
}

const vehiculo1 = new Vehiculo ('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado('--Vehiculo 1--');
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const deportivo1 = new VehiculoDeportivo ('Ferrari', 'Spider', 'Amarillo', 2020, '4000', '500');
mostrarResultado('--Deportivo 1--');
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar;

const vehiculoObject = {
  marca: vehiculo1.marca,
  modelo: vehiculo1.modelo,
  color: vehiculo1.color,
  fabricacion: vehiculo1.fabricacion,
  cilindrada: vehiculo1.cilindrada
};

localStorage.setItem('Vehiculo1', JSON.stringify(vehiculoObject));
console.log(JSON.parse(localStorage.getItem('Vehiculo1')));


const deportivoObject ={
    marca: deportivo1.marca,
    modelo: deportivo1.modelo,
    color: deportivo1.color,
    fabricacion: deportivo1.fabricacion,
    cilindrada: deportivo1.cilindrada,
    potencia: deportivo1.potencia
};

for(let key in deportivoObject){
    if(deportivoObject.hasOwnProperty(key)){
        localStorage(key, deportivoObject[key])
    }
}

localStorage.removeItem('color');

localStorage.clear();

