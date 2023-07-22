// Copiar al portapapeles
$("#btn-copy-clipboard").click(function () {
  let text = $("#code-refer").val();

  navigator.clipboard
    .writeText(text)
    .then(() => {
      $("#alert-copy-clipboard").removeClass("d-none");
      setTimeout(() => {
        $("#alert-copy-clipboard").addClass("d-none");
      }, 3000);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Ir a las distintas secciones segun lo indicado
$(".profile-set-link").click(function () {
  let section_index = $(this).data("profsec");

  $(".profile-set-link").each(function (index, element) {
    if (index == section_index) {
      $(element).addClass("text-primary");
    } else {
      $(element).removeClass("text-primary");
    }
  });

  $(".profile-set-section").each(function (index, element) {
    if (index == section_index) {
      $(element).removeClass("d-none");
    } else {
      $(element).addClass("d-none");
    }
  });
});

// Habilitar campos para edicion de data profile

$("#btn-data-profile").click(function () {
  let tipe_pro = $(this).data("pro");

  if (tipe_pro == "e") {
    $(".input-data-profile").prop("disabled", false);
    $(this).text("Guardar información");
    $(this).data("pro", "s");
  } else {
    // AGREGAR CODIGO DE PETICION PARA GUARDAR LOS DATOS
    $(".input-data-profile").prop("disabled", true);
    $(this).text("Editar información");
    $(this).data("pro", "e");
  }
});

// LLENAR PIN ACTUAL CON EL PANEL DE NUMEROS EN PANTALLA
$(".pin-number").click(function () {
  let data_pin = $(this).data("numpin");

  let pin = "";

  if (!isNaN(data_pin)) {
    $(".input-current-pin").each(function (index, element) {
      if ($(element).val() == "") {
        $(element).val(data_pin);
        $(element).css({
          "background-color": "#005CEE",
        });
        return false;
      }
    });
  } else if (data_pin == "b") {
    $(".input-current-pin").each(function (index, element) {
      //Borrar el valor del ultimo input lleno
      if ($(element).val() == "") {
        $(element).prev().val("");
        $(element).prev().css({
          "background-color": "#ccc",
        });
        return false;
      } else if (index == 3) {
        $(element).val("");
        $(element).css({
          "background-color": "#ccc",
        });
      }
    });
  } else if (data_pin == "c") {
    $(".input-current-pin").each(function (index, element) {
      $(element).val("");
      $(element).css({
        "background-color": "#ccc",
      });
    });
  }

  $(".input-current-pin").each(function (index, element) {
    pin += $(element).val();
  });

  if (pin.length == 4) {
    $("#btn-current-pin-confirm").prop("disabled", false);
  } else {
    $("#btn-current-pin-confirm").prop("disabled", true);
  }
});

$("#btn-current-pin-confirm").click(function () {
  let pin = "",
    type_proccess = $(this).data("typepro");
  console.log(type_proccess);
  $(".input-current-pin").each(function (index, element) {
    pin += $(element).val();
  });

  if (type_proccess == "cur") {
    // Hacer peticion para validar pin actual del usuario
    $(".input-current-pin").each(function (index, element) {
      $(element).val("");
      $(element).css({
        "background-color": "#ccc",
      });
    });
    $("#panel-pin-title").text("Introduce el PIN nuevo");
    $(this).data("typepro", "new");
    $(this).data("disabled", true);
  } else if (type_proccess == "new") {
    //Mostrar el panel de confirmacion del nuevo pin
    $("#current-pin-panel").addClass("d-none");
    $("#confirm-pin-panel").removeClass("d-none");
  }
});

// LLENAR PIN NUEVO CON EL PANEL DE NUMEROS EN PANTALLA
$(".new-pin-number").click(function () {
  let data_pin = $(this).data("numpin");

  let pin = "";

  if (!isNaN(data_pin)) {
    $(".input-new-confirm-pin").each(function (index, element) {
      if ($(element).val() == "") {
        $(element).val(data_pin);
        $(element).css({
          "background-color": "#005CEE",
        });
        return false;
      }
    });
  } else if (data_pin == "b") {
    $(".input-new-confirm-pin").each(function (index, element) {
      //Borrar el valor del ultimo input lleno
      if ($(element).val() == "") {
        $(element).prev().val("");
        $(element).prev().css({
          "background-color": "#ccc",
        });
        return false;
      } else if (index == 3) {
        $(element).val("");
        $(element).css({
          "background-color": "#ccc",
        });
      }
    });
  } else if (data_pin == "c") {
    $(".input-new-confirm-pin").each(function (index, element) {
      $(element).val("");
      $(element).css({
        "background-color": "#ccc",
      });
    });
  }

  $(".input-new-confirm-pin").each(function (index, element) {
    pin += $(element).val();
  });

  if (pin.length == 4) {
    $("#btn-new-pin-confirm").prop("disabled", false);
  } else {
    $("#btn-new-pin-confirm").prop("disabled", true);
  }
});

$("#btn-new-pin-confirm").click(function () {
  let pin1 = "",
    pin2 = "";

  $(".input-new-confirm-pin").each(function (index, element) {
    pin1 += $(element).val();
  });

  $(".input-current-pin").each(function (index, element) {
    pin2 += $(element).val();
  });

  if (pin1 == pin2) {
    // Hacer peticion para cambiar pin del usuario
    $("#current-pin-panel").removeClass("d-none");
    $("#confirm-pin-panel").addClass("d-none");
    $("#btn-current-pin-confirm").data("typepro", "cur");
    $("#btn-current-pin-confirm").data("disabled", true);
    $("#panel-pin-title").text("Introduce tu PIN antiguo");
    $(".input-current-pin").each(function (index, element) {
      $(element).val("");
      $(element).css({
        "background-color": "#ccc",
      });
    });

    $(".input-new-confirm-pin").each(function (index, element) {
      $(element).val("");
      $(element).css({
        "background-color": "#ccc",
      });
    });
  } else {
    //Mostrar mensaje de error en pantalla
    $("#alert-pin-no-confirm").removeClass("d-none");
    $(".input-new-confirm-pin").each(function (index, element) {
      $(element).val("");
      $(element).css({
        "background-color": "#ccc",
      });
    });
    setTimeout(() => {
      $("#alert-pin-no-confirm").addClass("d-none");
    }, 3000);
  }
});
