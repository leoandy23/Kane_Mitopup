$(".btn-recharge-detail").click(function (e) {
  let card_id = $(this).data("recharge"),
    pos_x = e.clientX,
    pos_y = e.clientY;
  $(".recharge-detail").addClass("d-none");
  $("#modal-recharge-" + card_id).removeClass("d-none");
  $("#modal-recharge-" + card_id).css({
    left: pos_x - 350 + "px",
    bottom: 50 + "px",
  });
});

$(".btn-close-modal").click(function () {
  $(".recharge-detail").addClass("d-none");
});
