let cliente = prompt("Buenos dias bienvenido a Gym Center, Ingrese su nombre");
let dinero = Number(prompt(`"Hola ${cliente}, tu suscripcion se encuentra caducada, para continuar debes ingresar el monto de $500"`));
let deudaTotal = 500;
//Aqui pagara su deuda o le rechazara el pago interrumpiendo la operacion
if(dinero >= deudaTotal){
     alert(`Gracias ${cliente}, su pago se ha efectuado con exito`);
     mostrarRutinas ();
    }  else{
    alert("Debes renovar tu suscripcion para continuar, buen dia");    
 }
 //Funciones
function mostrarRutinas() {
    let dia = prompt(`${cliente} ¿Dime, en que dia estamos?: `); 
switch (dia.toLowerCase()) {
    case "lunes":
         alert(` ${cliente} en el dia de hoy tu rutina se basara en :
         Prebanca mancuerna 4 x 10
         Mariposa 4 x 10
         Prebanca inclinada maquina 4 x 12
         Extension mancuerna 4 x 12
         Patada Tricep 4 x 12
         Polea Triceps 4 x 12
         Escaladas 4 x 40
         Elevacion de piernas 4 x 20`);
     break;
     case "martes":
         alert(` ${cliente} en el dia de hoy tu rutina se basara en :
         Hoy es tu dia de descanso, recuerdalo`);
         break;
     case "miercoles":
         alert(` ${cliente} en el dia de hoy tu rutina se basara en :
         Polea al pecho 4 x 10
         Serrucho 4 x 10
         Convergente alto 4 x 12
         Curl Alt 4 x 10
         Scott 4 x 12
         Polea biceps 4x12
         Abdominales pelota 4 x 30
         Twit bolita 4 x 30`);
         break;
    case "jueves":
        alert(` ${cliente} en el dia de hoy tu rutina se basara en :
        Caminata tranquila de 4000 metros haciendo una breve pausa de 5 minutos, recuerda hidratarte.`);
        break;    
    case "viernes":
        alert(` ${cliente} en el dia de hoy tu rutina se basara en :
        Sentadilla 4 x 10
        Prensa Frontal 4 x 10
        Camilla isquios 4 x 12
        Militar mancuerna 4 x 12
        Remo menton polea 4 x 12
        Combinado vuelos 4 x 10
        Lumbar pelota 4 x 20
        Puente frontal hasta el fallo hijo!`);
        break;
    case "sabado":
        alert(`CERRADO, merecemos un descanso`);
        break;
    case "domingo":
         alert(`CERRADO, bueno nos gusta mucho descansar`);
         break;
     default:
         alert(`"Ingrese un valor correcto ej: lunes, martes"`);
         break;
}    
}



