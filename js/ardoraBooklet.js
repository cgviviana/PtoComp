$(document).ready(function(){
   $("#mybook").booklet({
      width: "90vw",  // Se adapta al ancho de la pantalla
      height: "85vh", // Se adapta a la altura de la pantalla
      speed: 1000,
      direction: "LTR",
      startingPage: 1,
      easing: "easeInOutQuad",
      easeIn: "easeInQuad",
      easeOut: "easeOutQuad",
      closedFrontTitle: "Beginning",
      closedFrontChapter: "Beginning of Book",
      closedBackTitle: "End",
      closedBackChapter: "End of Book",
      covers: true,
      closed: true,
      autoCenter: true,
      pagePadding: 10,
      pageBorder: 0,
      pageNumbers: true,
      manual: false,
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
      arrows: true, // Activar flechas de navegación para mejorar la interacción
      arrowsHide: false,
      cursor: "pointer",
      hash: false,
      hashTitleText: " - Page ",
      keyboard: true,
      next: null,
      prev: null,
      auto: false,
      delay: 5000,
      pause: null,
      play: null,
      menu: null,
      pageSelector: true, // Activar selector de páginas
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

// Función para reproducir sonidos correctamente
function playIt(sound){
   var sounds = document.getElementsByTagName("audio");
   for(var i = 0; i < sounds.length; i++) {
      sounds[i].pause();
   }
   var file = document.getElementById(sound);
   file.load();
   file.play();
}
