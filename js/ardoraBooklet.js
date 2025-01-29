$(document).ready(function(){
    $("#mybook").booklet({
        name: "Libro Interactivo",
        width: 900,  
        height: 600,  
        speed: 800,  
        direction: "LTR",
        startingPage: 0,  // Inicia en la portada
        easing: "easeInOutQuad",
        easeIn: "easeInQuad",
        easeOut: "easeOutQuad",
        closed: true,  // Activa portada y contraportada
        covers: true,  // Habilita portada
        autoCenter: true,  
        pagePadding: 10,
        pageBorder: 0,
        pageNumbers: true,  
        manual: true,  
        hovers: true,
        hoverWidth: 50,  
        hoverSpeed: 500,
        hoverThreshold: 0.5,
        overlays: true,
        arrows: true, // Habilitar flechas de navegación
        arrowsHide: false,
        cursor: "pointer",
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
