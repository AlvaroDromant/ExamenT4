import { Vehiculo } from "./vehiculo.js";
import { VehiculoDeportivo } from "./automovilDeportivo.js";

const resultadocontainer = document.createElement('div');
document.body.appendChild(resultadocontainer);

export function mostrarResultado(mensaje){
 resultadocontainer.innerHTML = `<p>${mensaje}</p>`
}

const vehiculo1 = new Vehiculo ('BMW', 'CLK', 'rojo', 1992, '2400');
mostrarResultado(`--Vehiculo 1--`);
vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

const deportivo1 = new VehiculoDeportivo ('Ferrari', 'Spider', 'Amarillo', 2020, '4000', '500');
mostrarResultado(`--Deportivo 1--`);
deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(140);
deportivo1.frenar;
