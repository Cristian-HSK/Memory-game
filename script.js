let controleCartaVirada;
function virarCarta(carta) {
    if (document.getElementById(carta).className == "cartas") {
        document.getElementById(carta).className = "cartaVirada";
        setTimeout(function(){document.getElementById(carta).className = "cartas";},2000);
    } 
    else {
        document.getElementById(carta).className = "cartas";
}
}
/*function virarCarta(carta) {
    document.getElementById(carta).className = "cartaVirada";
    setTimeout(function(){document.getElementById(carta).className = "cartas";},2000);
}*/
