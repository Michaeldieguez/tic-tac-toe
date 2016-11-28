// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"

var turn= "player1"

function  makeShape(){
  if(turn =="player1"){
    var circle = document.createElementNS(namespace, "circle")
    circle.setAttribute("cx",58)
    circle.setAttribute("cy", 43)
    circle.setAttribute("r",25)
    circle.setAttribute("fill","red")
    var canvas = document.getElementById("game-board")
    canvas.appendChild(circle)
    turn="player2"
  }
}else{
  //Create rect in top left
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x",15)
  rect.setAttribute("y" 0)
  rect.setAttribute("width" 88)
  rect.setAttribute("height" 90)
  rect.setAttribute("fill","aqua" )
  var canvas =document.getElementById("game-board")
  canvas.appendChild(rect)
  turn="player1"
  }
}



function changeShape() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",160)
  circle.setAttribute("cy", 43)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function anotherShape() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",255)
  circle.setAttribute("cy", 43)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function Shape() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",59)
  circle.setAttribute("cy", 148)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function ShapeAgain() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",255)
  circle.setAttribute("cy", 148)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function MakeAnotherShape() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",160)
  circle.setAttribute("cy", 148)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function AnotherOne() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",60)
  circle.setAttribute("cy", 245)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function OneMore() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",160)
  circle.setAttribute("cy", 245)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}

function LastShape() {
  //code to create a shape
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx",255)
  circle.setAttribute("cy", 245)
  circle.setAttribute("r",25)
  circle.setAttribute("fill","blue")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(circle)
}


var turn= "player1"

function  makeShape(){
  if(turn=="player1"){

  }
}
