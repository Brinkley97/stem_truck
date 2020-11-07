// alert("hey");
$(document).ready(function(){
  $('.quantityBox').on('input', function(){
    var sum = 0;
    $('.quantityBox').each(function(i, obj) {
      sum += isNaN(this.value) ? 0 : parseInt(this.value);
    });
    $("#totalSum").val(sum);
  });
});
