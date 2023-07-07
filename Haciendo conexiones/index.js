$(".circle-accept").click(function(){
  let number = parseInt($(".number-conection").text())
  $(".number-conection").text(number +1)
  $(this).closest(".nav-flex").hide()
})

$(".circle-close").click(function(){
  let number = parseInt($(".number-conection").text())
  $(".number-conection").text(number -1)
  $(this).closest(".nav-flex").hide()
})

$("#edit").click(function() {
  let name = $(this).closest(".main-block").find("h1")
  name.text("Change your name")
})