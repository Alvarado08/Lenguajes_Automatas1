let band = true;

do{
    let respuesta = prompt("Caul es tu clima favorito?");
    switch (respuesta){
        case "lluvia":
            alert("Recuerde llevar un paraguas");
            break;
        case "sol":
            alert("Recuerde llevar gafas");
            break;
        case "nublado":
            alert("Sal a pasear");
            break;
        default:
            band = false;
    }

}while (band);
alert("Goodbye");