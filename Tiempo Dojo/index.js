$(".button").click(function() {
  $(".cookie").hide()
})

$("#temperature").change(function() {
  let option = $("#temperature  option:selected").text();

  if (option == "°F") {
    
    $('.number').each(function() {
      let celsius = parseFloat($(this).text());
      let fahrenheit = (celsius * 9/5) + 32;
      $(this).text(fahrenheit.toFixed(0) + 'F')})

  } else if(option == "°C") {

    $('.number').each(function() {
      var fahrenheit = parseFloat($(this).text());
      var celsius = (fahrenheit - 32) * 5/9;
      $(this).text(celsius.toFixed(0) + 'C');
    });

  }
})

$("li").click(function(){
  alert("Loading " + $(this).text() + " weather report...")
})
