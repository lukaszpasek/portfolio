

$(document).ready(function (numer) {
 
  var $opis = $("#opis");
  var $portfolio = $("#portfolio");
  var $kontakt = $("#kontakt");
 
  
 $arrowDown = $("#cont");
  $arrowDown.on("click", function () {
    $('body,html').animate({
      scrollTop: $kontakt.offset().top
    }, 2300, function () {})
  });

 
 $ar = $("#port");
  $ar.on("click", function () {
    $('body,html').animate({
      scrollTop: $portfolio.offset().top
    }, 1500, function () {})
  });
  
   
 $arro = $("#me");
  $arro.on("click", function () {
    $('body,html').animate({
      scrollTop: $opis.offset().top
    }, 1300, function () {})
  });
  $r = $("#more");
  $r.on("click", function () {
    $('body,html').animate({
      scrollTop: $opis.offset().top
    }, 1300, function () {})
  });
 


}); //zamykamy funkcje w ready jQ
