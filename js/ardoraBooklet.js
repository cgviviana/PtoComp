$(document).ready(function(){
   $("#mybook").booklet({
      name: "Mi Libro",
      width: 1000, // Se mantiene para un tamaño uniforme
      height: 700, 
      speed: 1000,
      direction: "LTR",
      startingPage: 0, // Iniciar en la portada
      easing: "easeInOutQuad",
      easeIn: "easeInQuad",
      easeOut: "easeOutQuad",
      closed: true, // Activar modo libro cerrado
      covers: true, // Incluir portada y contraportada
      autoCenter: true,
      pagePadding: 10,
      pageBorder: 0,
      pageNumbers: true,
      manual: true, // Permite clics manuales en los bordes
      hovers: true,
      hoverWidth: 50,
      hoverSpeed: 500,
      hoverThreshold: 0.25,
      overlays: true,
      tabs: false,
      tabWidth: 60,
      tabHeight: 20,
      nextControlText: "Next",
      previousControlText: "Previous",
      nextControlTitle: "Next",
      previousControlTitle: "Previous",
      arrows: true, // Activar flechas de navegación
      arrowsHide: false,
      cursor: "pointer",
      hash: false,
      hashTitleText: " - Page ",
      keyboard: true,
      next: ".b-arrow-next", // Asignar botón de siguiente página
      prev: ".b-arrow-prev", // Asignar botón de página anterior
      auto: false,
      delay: 5000,
      pause: null,
      play: null,
      menu: null,
      pageSelector: false,
      chapterSelector: false,
      shadows: true,
      shadowTopFwdWidth: 166,
      shadowTopBackWidth: 166,
      shadowBtmWidth: 50,
      before: function(){},
      after: function(){}
   });

   $(".b-prev").attr("tabindex","0");
   $(".b-next").attr("tabindex","0");
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
