/*Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos
* datos y reporte al final la cantidad de hombres y la cantidad de mujeres procesadas.
* Se tienen las siguientes personas: Luis, Ana, José, Carmen, Rosa, José, María, Luz, Rafael,
* Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
* Cantidad de personas: 12
* Cantidad de hombres: 6
* Cantidad de mujeres: 6
*/

import CL_personas from "./CL_personas.js";
import CL_programa from "./CL_programa.js";

let pers1 = new CL_personas("luis", "M");
let pers2 = new CL_personas("Ana", "F");
let pers3 = new CL_personas("José", "M");
let pers4 = new CL_personas("Carmen", "F");
let pers5 = new CL_personas("Rosa", "F");
let pers6 = new CL_personas("José", "M");
let pers7 = new CL_personas("María", "F");
let pers8 = new CL_personas("Luz", "F");
let pers9 = new CL_personas("Rafael", "M");
let pers10 = new CL_personas("Liz", "F");
let pers11 = new CL_personas("Marcos", "M");
let pers12 = new CL_personas("Leo", "M");
let programa = new CL_programa();

programa.procesarPersonas(pers1);
programa.procesarPersonas(pers2);
programa.procesarPersonas(pers3);
programa.procesarPersonas(pers4);
programa.procesarPersonas(pers5);
programa.procesarPersonas(pers6);
programa.procesarPersonas(pers7);
programa.procesarPersonas(pers8);
programa.procesarPersonas(pers9);
programa.procesarPersonas(pers10);
programa.procesarPersonas(pers11);
programa.procesarPersonas(pers12);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> Cantidad de personas: ${programa.cntPresonas1()}
<br> Cantidad de hombres: ${programa.cntMascu1()}
<br> Cantidad de mujeres: ${programa.cntFeme1()}
`