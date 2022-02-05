let mensaje = prompt("Hola que pizza desea ordenar de la lista: -pizza pequeña -pizza mediana -pizza familiar");
let pizza1 = "";
let adicional1 = "";
let segundoAdicional1 = "";


if (mensaje == "pizza pequeña") {
    pizza1 = prompt("Pollo y champoñones, Hawaiana, o Carnes");
} 

else if (mensaje == "pizza mediana") {
    pizza1 = prompt("Mexicana o Criolla");
}

else if (mensaje == "pizza familiar") {
    pizza1 = prompt("Vegetariana o Carne y pollo");
}

else{
    alert("La opción ingresada no esta disponible");
}



switch (pizza1) {
    case "pollo y champiñones":
        adicional1 = prompt("¿Con queso o sin queso");
        segundoAdicional1 = prompt("¿Con salsa o con borde de bocadillo?");
        break;
    case "hawaiana":
        adicional1 = prompt("¿Sin piña o sin jamon?");
        segundoAdicional1 = prompt("¿Con o sin salami?");
        break;
    case "carnes":
        adicional1 = prompt("¿Con o sin salami?");
        segundoAdicional1 = prompt("¿Con cabano o con queso?");
        break;
    case "mexicana":
        adicional1 = prompt("¿Con nachos o sin nachos?");
        segundoAdicional1 = prompt("¿Guacamole o Extraguacamole?");
        break;
    case "criolla":
        adicional1 = prompt("¿Con o sin maiz?");
        segundoAdicional1 = prompt("¿Con Extracarne molida o Queso?");
        break;
    case "vegetariana":
        adicional1 = prompt("¿Con o sin queso?");
        break;
    case "carne y pollo":
        adicional1 = prompt("¿Con o sin adicion de salchichas?");
        segundoAdicional1 = prompt("¿Con o sin adicion de Champiñones?");
        break;
    default:
        alert("la opcion ingresada no esta disponible");
            break;
}




if (adicional1 == "no") {
    alert("Su pedido es una " + mensaje + " de " + pizza1 + " " + segundoAdicional1);
}

else if (segundoAdicional1 == "no") {
    alert("Su pedido es una " + mensaje + " de " + pizza1 + " " + adicional1);
} 

else if (adicional1 == "no" && segundoAdicional1 == "no"){
    alert("Su pedido es una " + mensaje + " de " + pizza1); 
}

    else{
    alert("Tu pedido es una " + mensaje + " de " + pizza1 + " " + adicional1 + " y " + segundoAdicional1);
}


