$(document).ready(function () {
    $("#mybook").booklet({
        width: "90vw",
        height: "85vh",
        closed: true,
        covers: true,
        autoCenter: true,
        speed: 800,
        pagePadding: 10,
        pageNumbers: true,
        manual: true,
        overlays: true,
        hoverWidth: 50,
        hoverSpeed: 500,
        hoverThreshold: 0.25,
        arrows: true,
        keyboard: true,
        next: ".b-next",
        prev: ".b-prev",
        shadows: true,
        shadowTopFwdWidth: 166,
        shadowTopBackWidth: 166,
        shadowBtmWidth: 50,
        before: function () { },
        after: function () { }
    });

    // Ajustar tamaño dinámicamente
    $(window).resize(function () {
        let windowWidth = $(window).width() * 0.9;
        let windowHeight = $(window).height() * 0.85;
        $("#mybook").booklet("option", {
            width: windowWidth,
            height: windowHeight
        });
    });
});

// Función para reproducir audio
function playIt(sound) {
    var sounds = document.getElementsByTagName("audio");
    for (var i = 0; i < sounds.length; i++) sounds[i].pause();
    var file = document.getElementById(sound);
    file.load();
    file.play();
}
