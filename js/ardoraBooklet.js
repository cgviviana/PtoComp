$(document).ready(function(){
   $("#mybook").booklet({
      name: "",
      width: 1000, // Ajuste del ancho para mejor visualización
      height: 700, // Ajuste del alto para mejor visualización
      speed: 1000,
      direction: "LTR",
      startingPage: 0, // Asegurar que comience desde la portada
      easing: "easeInOutQuad",
      easeIn: "easeInQuad",
      easeOut: "easeOutQuad",
      closed: true, // Habilitar modo libro cerrado
      covers: true, // Incluir portada y contraportada
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
      arrows: true, // Activar flechas de navegación
      arrowsHide: false,
      cursor: "pointer",
      hash: false,
      hashTitleText: " - Page ",
      keyboard: true,
     
