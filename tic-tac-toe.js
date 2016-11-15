// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

function makeShape() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", 15)
  circle.setAttribute("cy", 0)
  circle.setAttribute("r",10)
  circle.setAttribute("fill","red")
  var canvas = document.getElementById("my-canvas")
  canvas.appendChild(circle)
}
