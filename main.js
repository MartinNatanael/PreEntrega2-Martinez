let value = "";
let plan = "";
let result = "";
let finalResult = "";
let finalResultDecimal = "";
let save ='';
const consult=[];
let showConsult ="";

const button = document.getElementById("button"); //Inicio el algoritmo
button.addEventListener("click", function () {

  //Ingresamos valores 
  value = parseInt(prompt("¿Quere calcular el costo de su prestamo?\nIngrese el monto al que desde acceder sin comas ni puntos"));
  if (isNaN(value) || value == "") {
    alert("Por favor Ingresa un numero valido");
  } else {
    plan = parseInt(prompt("Ingrese el Plan de cutoas que desea\nPuede elegir entre 12, 24, 36 meses"));
    function interestsCalculator(value, plan) { //calculamos los intereses a partir de los valores ingresados por el usuario
      switch (plan) {
        case 12:
          return value * 2.25;
          break;
        case 24:
          return value * 2.5;
          break;
        case 36:
          return value * 2.75;
          break;
        default:
          return alert("No ingresaste un plan de pagos valido");
          break;
      }
    }
  }
//obtenemos un resultado de la primera parte y operamos para calcular el monto de los pagos por mes
  result = interestsCalculator(value, plan);

  function amountCalculator(plan, result) {
    switch (plan) {
      case 12:
        return result / 12;
        break;
      case 24:
        return result / 24;
        break;
      case 36:
        return result / 36;
        break;
      default:
        return alert("Hubo un error, presione COMENZAR");
        break;
    }
  }

  finalResult = amountCalculator(plan, result);
  finalResultDecimal = finalResult.toFixed(2); //reducir a numero con 2 decimales

  //mostramos resultado final 
  alert(`Su monto final a pagar sera: $${result}\n ${plan} pagos de $${finalResultDecimal}`);

  //creamos objeto constructor para guardar las diferentes consultas en un array de objetos
  class Result{
    constructor(result,plan,finalResultDecimal){
      this.result=result;
      this.plan=plan;
      this.finalResultDecimal=finalResultDecimal;
    }
  }

const resultNew = new Result(result,plan,finalResultDecimal);
consult.push(resultNew);//guardar los valores en array

console.log(consult);//mostrar los valores guardados por consola para asegurarnos que se esta recopilando la informacion

//Funcionalidad: Preguntar si queremos mostrar todas las consultas hechas
showConsult = prompt(`Para conocer todas sus consultas ingrese: SI\nPara salir ingrese: NO`).toLowerCase(); 
if (showConsult=='si'){
 consult.forEach((item)=>{
  alert(`Su Plan es ${item.plan} cutotas\nPagará un valor total de $${item.result}\n$${item.finalResultDecimal} pesos por cada cuota.`);
 })
}else if(showConsult=='no'){
  alert('Muchas Gracias Por su visita');
 }else{
  alert('Muchas Gracias Por su consulta');
 }
 alert('Puede realizar otra consulta presionando el boton COMENZAR');
});

