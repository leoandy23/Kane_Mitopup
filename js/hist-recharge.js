// Codigo para carousel personalizado
$(".carousel-link").click(function () {
  let car_index = $(this).data("carid");

  $(".carousel-link").each(function (index, element) {
    if (index == car_index) {
      $(element).addClass("text-primary");
    } else {
      $(element).removeClass("text-primary");
    }
  });

  $(".carousel-item-c").each(function (index, element) {
    if (index == car_index) {
      $(element).removeClass("d-none");
    } else {
      $(element).addClass("d-none");
    }
  });
});

function showSection(sectionNumber) {
  // Mostrar la sección correspondiente al botón clicado
  if (sectionNumber == 1) {
    $("#section2").addClass("d-none");
    $("#section1").removeClass("d-none");

    $("#btn-section2").removeClass("bg-white");
    $("#btn-section1").addClass("bg-white");

    $("#btn-section2").addClass("text-opacity-25");
    $("#btn-section1").removeClass("text-opacity-25");
  } else {
    $("#section1").addClass("d-none");
    $("#section2").removeClass("d-none");

    $("#btn-section1").removeClass("bg-white");
    $("#btn-section2").addClass("bg-white");

    $("#btn-section1").addClass("text-opacity-25");
    $("#btn-section2").removeClass("text-opacity-25");
  }
}

// Mostrar frame derecho segun boton
$(".btn-detail-recharge").click(function () {
  $("#detail-recharge-contact").removeClass("d-none");
  $("#detail-facture").addClass("d-none");
});

$(".btn-detail-facture").click(function () {
  $("#detail-facture").removeClass("d-none");
  $("#detail-recharge-contact").addClass("d-none");
});
