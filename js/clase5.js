let total = 0
let cuotas = 0
let sinint = 0

    const persona = {

        nombre: 'Coder',
        apellido: 'House',
    
        saludar: function () {
            console.log('Hola, qué tal?')
        }
    }

    persona.saludar ()
    alert(persona.nombre + " " + persona.apellido) +(`Hola como estas?`)
    alert(`En esta aplicación le ayudameros a calcular el valor de las coutas a pagar por su producto`);

    
  
total = parseInt(prompt("Ingrese el monto total de su producto")); 
cuotas = parseInt(prompt("Elija en que cantidad de cuotas quiere abonar. Recuerde que el maximo de cuotas son 6 y hasta 3 coutas no tiene interés")); 

    console.log(total)
    console.log(cuotas)

    if (cuotas <= 0 || cuotas > 6 ) {

        alert("Elija desde 1 a 6 coutas por favor");    
}

    else if(cuotas == 1 || cuotas == 2 || cuotas == 3) {

        alert(`El valor de su producto en ${cuotas} cuotas es de ` + (total/cuotas));

}

     else if (cuotas == 4 || cuotas == 5 || cuotas == 6) {

         alert(`El valor de su producto en ${cuotas} cuotas es de ` + ((total/cuotas)*1.15) + " con un recargo del 15%");    
}

alert("Gracias por confiar en nosotros")