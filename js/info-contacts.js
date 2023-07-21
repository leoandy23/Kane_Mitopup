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

// Mostrar formulario de añadir contacto
$("#btn-add-contact").click(function () {
  $("#add-contact").removeClass("d-none");
  $("#info-contacts").addClass("d-none");
});

// Guardar contacto y regresar
$("#btn-save-contact").click(function () {
  $("#info-contacts").removeClass("d-none");
  $("#add-contact").addClass("d-none");

  $("#modal-save").modal("show");
});
