$(document).ready(function(){
    $("#mybook").booklet({
        name: "Libro Interactivo",
        width: 900,  // Ancho del libro
        height: 600,  // Alto del libro
        speed: 800,  
        direction: "LTR",
        startingPage: 0,  // Asegurar que inicia en la portada
        easing: "easeInOutQuad",
        easeIn: "easeInQuad",
        easeOut: "easeOutQuad",
        closed: true,  // Simular un libro real con portada
        covers: true,  // Habilitar portada y contraportada
        autoCenter: true,  
        pagePadding: 10,
        pageBorder: 0,
        pageNumbers: true,  
        manual: true,  // Permitir clics en páginas para navegación
        hovers: true,
        hoverWidth: 100,  // Aumentar área de clic para evitar problemas
        hoverSpeed: 500,
        hoverThreshold: 0.5,
        overlays: true,
        tabs: false,
        arrows: true, // Habilitar flechas de navegación
        arrowsHide: false,
        cursor: "pointer",
        hash: false,
        hashTitleText: " - Página ",
        keyboard: true,
        shadows: true,
        shadowTopFwdWidth: 166,
        shadowTopBackWidth: 166,
        shadowBtmWidth: 50,
        before: function(){ console.log("Cambiando de página..."); },
        after: function(){ console.log("Nueva página mostrada."); }
    });

    // Ajustar navegación con botones visibles
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

