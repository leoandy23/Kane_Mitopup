// Scripts Index
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

// Script pagina de recarga sin registrar
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
      $("#btn-section-recharge-0").prop("disabled", false);
    });
  }
});

$("input[name='recharge-value']").on("change", function () {
  $("#btn-section-recharge-0").prop("disabled", false);
});

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

  if (section_number == 0) {
    let recharge_cost = $("input[name='recharge-value']:checked").data("value"),
      recharge_type = $("input[name='recharge-value']:checked").data("type");
    $("#recharge-details").removeClass("d-none");
    $("#recharge-type").text(recharge_type);
    $("#recharge-cost").text("$" + recharge_cost);
    $("#recharge-total-cost").text("$" + (recharge_cost + 5));
  }
});

$("#text-email-recharge").on("input", function () {
  let email = $(this).val(),
    check = $("#accepted-communication").prop("checked");
  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (patronEmail.test(email) && check) {
    $("#btn-section-recharge-1").prop("disabled", false);
  } else {
    $("#btn-section-recharge-1").prop("disabled", true);
  }
});

$("#accepted-communication").on("change", function () {
  let email = $("#text-email-recharge").val(),
    check = $(this).prop("checked");
  const patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (patronEmail.test(email) && check) {
    $("#btn-section-recharge-1").prop("disabled", false);
  } else {
    $("#btn-section-recharge-1").prop("disabled", true);
  }
});

$("#btn-section-recharge-1").click(function () {
  let email = $("#text-email-recharge").val();
  $("#email-user").text(email);
  $("#info-user").removeClass("d-none");
});

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
