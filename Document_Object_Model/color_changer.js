var header = document.querySelector("h1")

header.style.color = 'red'
//Random color function
function getRandomcolor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeadercolor() {
  colorInput = getRandomcolor()
  header.style.color = colorInput;
}

setInterval("changeHeadercolor()",500);
