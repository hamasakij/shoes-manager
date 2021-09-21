// jquery
$(document).ready(function () {
  // 在庫一覧出庫ボタン押下時
  $(".button.new-entry").click(function () {
    // モーダル表示
    $(".ui.modal.shipping-modal").modal("show");
  });
});
$(document).ready(function () {
  // 更新ボタン押下時
  $(".inverted.button").click(function () {
    // モーダル表示
    $(".ui.modal.update-modal").modal("show");
  });
});
