$(document).ready(function(){
    $("#mybook").booklet({
        name: "Mi Libro",
        width: 900,
        height: 600,
        speed: 800,
        direction: "LTR",
        startingPage: 0,  // Asegurar que inicia en la portada
        easing: "easeInOutQuad",
        easeIn: "easeInQuad",
        easeOut: "easeOutQuad",
        closed: true,  // Habilitar efecto de libro cerrado
        covers: true,  // Mostrar portada y contraportada
        autoCenter: true,
        pagePadding: 10,
        pageBorder: 0,
        pageNumbers: true,
        manual: true,  // Permitir clics en las páginas para navegar
        hovers: true,
        hoverWidth: 100,  // Ampliar área de clics para avanzar/retroceder
        hoverSpeed: 500,
        hoverThreshold: 0.5,
        overlays: true,
        tabs: false,
        arrows: true, // Mostrar flechas de navegación
        arrowsHide: false,
        cursor: "pointer",
        hash: false,
        hashTitleText: " - Page ",
        keyboard: true,
        next: ".b-arrow-next", // Botón de siguiente página
        prev: ".b-arrow-prev", // Botón de página anterior
        auto: false,
        shadows: true,
        shadowTopFwdWidth: 166,
        shadowTopBackWidth: 166,
        shadowBtmWidth: 50,
        before: function(){ console.log("Página cambiada"); },
        after: function(){ console.log("Nueva página mostrada"); }
    });

    // Verificar si las flechas de navegación están funcionando correctamente
    $(".b-arrow-prev").on("click", function() {
        $("#mybook").booklet("prev");
    });

    $(".b-arrow-next").on("click", function() {
        $("#mybook").booklet("next");
    });

    $(".b-prev").attr("tabindex", "0");
    $(".b-next").attr("tabindex", "0");
});

// Función para reproducir sonidos sin interferencias
function playIt(sound) {
    var sounds = document.getElementsByTagName("audio");
    for (var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
    }
    var file = document.getElementById(sound);
    file.load();
    file.play();
}
