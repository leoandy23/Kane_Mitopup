// Script para select personalizado
$(document).ready(function () {});

function showSectionContact(sectionNumber) {
  // Mostrar la sección correspondiente al botón clicado
  if (sectionNumber == 1) {
    $("#section-contact-2").addClass("d-none");
    $("#section-contact-1").removeClass("d-none");

    $("#btn-section-contact-2").removeClass("bg-white");
    $("#btn-section-contact-1").addClass("bg-white");

    $("#btn-section-contact-2").addClass("text-opacity-25");
    $("#btn-section-contact-1").removeClass("text-opacity-25");
  } else {
    $("#section-contact-1").addClass("d-none");
    $("#section-contact-2").removeClass("d-none");

    $("#btn-section-contact-1").removeClass("bg-white");
    $("#btn-section-contact-2").addClass("bg-white");

    $("#btn-section-contact-1").addClass("text-opacity-25");
    $("#btn-section-contact-2").removeClass("text-opacity-25");
  }
}

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

// Validar ingreso de contacto o checkear algun contacto

$(".contact-input").on("input", function () {
  let contact_name = $("#contact-name").val(),
    contact_number = $("#contact-number").val();

  $("input[name='contact-check']").each(function (index, element) {
    $(element).prop("checked", false);
  });

  if (contact_name != "" && contact_number != "") {
    $("#btn-section-recharge-0").prop("disabled", false);
  } else {
    $("#btn-section-recharge-0").prop("disabled", true);
  }
});

$("input[name='contact-check']").on("change", function () {
  $("#btn-section-recharge-0").prop("disabled", false);
  $(".contact-input").each(function (index, element) {
    $(element).val("");
  });
});

//Validar ingreso de saldo personalizado

$("#txt-other-quantity").on("input", function () {
  let other_quantity = $(this).val();
  if (other_quantity == "" || isNaN(other_quantity)) {
    $("#btn-other-quantity").attr("disabled", true);
  } else {
    $("#btn-other-quantity").attr("disabled", false);
    $("#btn-other-quantity").click(function () {
      $("#other-quantity-container").removeClass("d-none");
      $("#other-quantity-value").text("$" + parseFloat(other_quantity));
      $("#other-quantity-check").prop("checked", true);
      $("#other-quantity-check").data("value", parseFloat(other_quantity));
      $("#modal-other-quantity").modal("hide");
      $("#btn-section-recharge-1").prop("disabled", false);
    });
  }
});

//  Validar si alguno de los radio están checkeados
$("input[name='recharge-value']").on("change", function () {
  $("#btn-section-recharge-1").prop("disabled", false);
});

// Cambio de secciones de estado de la recarga

$(".btn-section-recharge").click(function (e) {
  let section_number = $(this).data("section");
  $(".section-recharge").each(function (index, element) {
    let preview_section = index - 1;
    if (preview_section == section_number) {
      $(element).removeClass("d-none");
    } else {
      $(element).addClass("d-none");
    }

    $(".link-section-recharge").each(function (index, element) {
      if (index <= section_number + 1) {
        $(element).removeClass("text-light-emphasis");
        $(element).addClass("text-primary");
      } else {
        $(element).addClass("text-light-emphasis");
      }
    });
  });

  if (section_number == 1) {
    let recharge_cost = $("input[name='recharge-value']:checked").data("value"),
      recharge_type = $("input[name='recharge-value']:checked").data("type");
    $("#recharge-details").removeClass("d-none");
    $("#recharge-type").text(recharge_type);
    $("#recharge-cost").text("$" + recharge_cost);
    $("#recharge-total-cost").text("$" + (recharge_cost + 5));
  }
});

// Llenar info de correo en la caja de resumen de la recarga

$("#btn-section-recharge-2").click(function () {
  let email = $("#text-email-recharge").val();
  $("#email-user").text(email);
  $("#info-user").removeClass("d-none");
});

// Pintar los enlaces de las secciones segun la posicion
$(".link-section-recharge").click(function () {
  let section_index = $(this).data("section");

  $(".link-section-recharge").each(function (index, element) {
    if (index <= section_index) {
      $(element).removeClass("text-light-emphasis");
      $(element).addClass("text-primary");
    } else {
      $(element).addClass("text-light-emphasis");
    }
  });

  $(".section-recharge").each(function (index, element) {
    if (index == section_index) {
      $(element).removeClass("d-none");
    } else {
      $(element).addClass("d-none");
    }
  });
});

//Configuracion de select personalizado
$(".select-header").on("click", function () {
  $(this).closest(".custom-select").toggleClass("open");
});

$(".options-list li").on("click", function () {
  const value = $(this).data("value");
  const selectedText = $(this).find(".option-text").text(),
    optionInfoText = $(this).find(".option-info").text();

  $("#info-select").text(optionInfoText);
  $(this).closest(".custom-select").find(".selected-option").text(selectedText);
  $(this).closest(".custom-select").removeClass("open");
});

// Habilitar Select de frecuencia

$("#check-program-recharge").on("change", function () {
  // Obtener valor del check
  let check_value = $(this).prop("checked");
  if (check_value) {
    $("#select-frecuency").removeClass("d-none");
  } else {
    // Borrar la seleccion de los radio
    $("input[name='frecuency']").each(function (index, element) {
      $(element).prop("checked", false);
    });

    // Volver a la normalidad el texto de la cabecera del select
    $("#info-select").text("");
    $(".selected-option").text("Selecciona una opción");
    $("#select-frecuency").addClass("d-none");
  }
});
