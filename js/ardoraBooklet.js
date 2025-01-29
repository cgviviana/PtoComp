$(document).ready(function() {
    $("#mybook").booklet({
        name: "Libro Interactivo",
        width: "90%",   // Ajusta el ancho al 90% de la pantalla
        height: "80vh", // Ajusta la altura al 80% de la pantalla
        speed: 1000,
        direction: "LTR", // Dirección de lectura de izquierda a derecha
        startingPage: 1, // Comienza en la primera página
        easing: "easeInOutQuad",
        easeIn: "easeInQuad",
        easeOut: "easeOutQuad",
        
        // Configuración de portadas y estructura
        covers: true, 
        closed: true,
        autoCenter: true,
        
        // Configuración de páginas
        pagePadding: 10,
        pageBorder: 0,
        pageNumbers: true, 
        
        // Configuración de interacción
        hovers: true,
        hoverWidth: 50,
        hoverSpeed: 500,
        hoverThreshold: 0.25,
        overlays: true,
        tabs: false,
        tabWidth: 60,
        tabHeight: 20,
        
        // Configuración de navegación
        nextControlText: "Next",
        previousControlText: "Previous",
        nextControlTitle: "Next",
        previousControlTitle: "Previous",
        arrows: true,
        arrowsHide: false,
        cursor: "pointer",
        
        // Configuración de teclado
        keyboard: true,
        
        // Configuración de navegación automática
        auto: false,
        delay: 5000,
        pause: null,
        play: null,
        
        // Sombras y efectos visuales
        shadows: true,
        shadowTopFwdWidth: 166,
        shadowTopBackWidth: 166,
        shadowBtmWidth: 50,
        
        // Callbacks
        before: function() {},
        after: function() {}
    });

    // Asegurar que los botones prev y next sean accesibles
    $(".b-prev").attr("tabindex", "0");
    $(".b-next").attr("tabindex", "0");
});

/* Función para reproducir sonidos sin interferencias */
function playIt(sound) {
    var sounds = document.getElementsByTagName("audio");
    for (var i = 0; i < sounds.length; i++) {
        sounds[i].pause();
    }
    var file = document.getElementById(sound);
    file.load();
    file.play();
}
