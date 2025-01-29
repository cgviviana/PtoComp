$(document).ready(function(){
    $("#mybook").booklet({
        width: "90%", // Ajusta el ancho al 90% de la pantalla
        height: "90%", // Ajusta el alto al 90% de la pantalla
        autoCenter: true,
        closed: true, // Para que la portada y contraportada sean individuales
        covers: true, // Habilita la portada y contraportada
        pagePadding: 10,
        speed: 800,
        arrows: true,
        keyboard: true,
        shadows: true,
        manual: true
    });

    // Ajuste de botones de navegación para que sean equitativos
    $(".b-prev").css({"width": "50%", "left": "0"});
    $(".b-next").css({"width": "50%", "right": "0"});
});
