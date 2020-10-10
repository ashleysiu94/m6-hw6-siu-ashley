//When a user hovers over any one of the boxes, highlight all of the boxes with a different background color

var boxes = document.getElementsByClassName("box");

function changeBoxColors() {
  document.getElementById("box1").style.backgroundColor = "#FF1493";
  document.getElementById("box2").style.backgroundColor = "#FF1493";
  document.getElementById("box3").style.backgroundColor = "#FF1493";
}

function ogBoxColors() {
  document.getElementById("box1").style.backgroundColor = "#FDFF00";
  document.getElementById("box2").style.backgroundColor = "#56FFC8";
  document.getElementById("box3").style.backgroundColor = "#A5FF00";
}

for (i=0; i<boxes.length; i++) {
  boxes[i].addEventListener("mouseover", changeBoxColors);
  boxes[i].addEventListener("mouseout", ogBoxColors);
}


//When a user clicks on box #1, have a message appear somewhere on the page that says “Oooh - so close, but no cigar” by appending a new DOM node

var firstBox = document.getElementById("box1");

function firstBoxMessage() {
  var firstBoxNewPara = document.createElement("p");
  var firstBoxNode = document.createTextNode("Oooh - so close, but no cigar");
  firstBoxNewPara.appendChild(firstBoxNode);
  document.getElementById("main").appendChild(firstBoxNewPara);
}

firstBox.onclick = firstBoxMessage;


//When a user clicks on box #2, have a message appear somewhere on the page that says “DING DING DING - We have a winner” by appending a new DOM node

var secondBox = document.getElementById("box2");

function secondBoxMessage() {
  var secondBoxNewPara = document.createElement("p");
  var secondBoxNode = document.createTextNode("DING DING DING - We have a winner");
  secondBoxNewPara.appendChild(secondBoxNode);
  document.getElementById("main").appendChild(secondBoxNewPara);
}

secondBox.onclick = secondBoxMessage;


//When a user clicks on box #3, have a message appear somewhere on the page that says “Oops, better luck next time” by appending a new DOM node

var thirdBox = document.getElementById("box3");

function thirdBoxMessage() {
  var thirdBoxNewPara = document.createElement("p");
  var thirdBoxNode = document.createTextNode("Oops, better luck next time");
  thirdBoxNewPara.appendChild(thirdBoxNode);
  document.getElementById("main").appendChild(thirdBoxNewPara);
}

thirdBox.onclick = thirdBoxMessage;


//When any one of the three boxes are clicked, have a button that says “Start Over” with an href of “#” appear somewhere on the page by removing a hidden class

var button = document.getElementById("button");

function showButton() {
  button.classList.remove("hide");
}

for (i=0; i<boxes.length; i++) {
  boxes[i].addEventListener("click", showButton);
}
