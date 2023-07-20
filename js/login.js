// Cuenta regresiva del codigo
let tiempoRestante = 5; // Tiempo inicial en segundos
let intervalo;

// Función para actualizar el contador y mostrar la cuenta regresiva
function actualizarContador() {
  // document.getElementById('counter').textContent = tiempoRestante;
  $("#counter").text("(00:" + tiempoRestante + ")");
  tiempoRestante--;

  if (tiempoRestante < 0) {
    clearInterval(intervalo);
    $("#link-new-code").data("newcode", "yes");
    $("#link-new-code").removeClass("text-opacity-50");
    $("#counter").text("");
  }
}

// Validar numero de telefono y pin
$(".input-login").on("input", function () {
  let phone_number = $("#phone-number").val(),
    pin_login = $("#pin-login").val();
  const patronTelefono = /^\d{6,10}$/;

  if (patronTelefono.test(phone_number) && pin_login.length == 4) {
    $("#btn-login").prop("disabled", false);
  } else {
    $("#btn-login").prop("disabled", true);
  }
});

// Pasar a confirmación de código

$("#btn-login").click(function () {
  // INTRODUCIR CODIGO DE PETICION
  intervalo = setInterval(actualizarContador, 1000);
  $("#form-phone-number").addClass("d-none");
  $("#code-confirm").removeClass("d-none");
});

// Validacion de codigo
$(".code-input").on("input", function () {
  let all_code = "";
  $(".code-input").each(function (index, element) {
    all_code += $(element).val();
  });

  if (all_code.length == 4) {
    $("#btn-validate-code").prop("disabled", false);
  } else {
    $("#btn-validate-code").prop("disabled", true);
  }
});

// Mostrar mensaje de nuevo código
$("#link-new-code").click(function (e) {
  e.preventDefault();
  let data_newcode = $(this).data("newcode");
  // console.log(data_newcode);
  if (data_newcode) {
    $("#alert-new-code").removeClass("d-none");
    tiempoRestante = 5;
    intervalo = setInterval(actualizarContador, 1000);
    $("#link-new-code").data("newcode", "");
    $("#link-new-code").addClass("text-opacity-50");
    setTimeout(() => {
      $("#alert-new-code").addClass("d-none");
    }, 3000);
  }
});

// PONER CODIGO DE PETICION DE VALIDACION DE CODIGO
