let palabra = prompt("escribe la palabra que quieres traducir de la lista disponible (casa - carro - perro - gato - mesa)");



switch (palabra) {
    case "casa":
        alert("'casa' en ingles es: HOUSE");
        break;
    case "carro":
        alert("'carro' en ingles es: CAR");
        break;
    case "perro":
        alert("'perro' en ingles es: DOG");
        break;
    case "gato":
        alert("'gato' en ingles es: CAT");
        break;
    case "mesa":
        alert("'mesa' en ingles es: DESK");
        break;
    default:
        alert("¡lo siento! la palabra ingresada no es valida");
        break;
}