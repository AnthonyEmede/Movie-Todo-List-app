var button = document.getElementById("enter");
var input = document.getElementById("movieinput");
var ul = document.querySelector("ul");
var litem = document.getElementsByTagName("li");

function inputLength() {
    return input.value.length;
}

function addListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value + "     "));
    ul.appendChild(li);
    input.value = "";

    var btn = document.createElement("Button");
    btn.appendChild(document.createTextNode("Delete"));
    li.appendChild(btn);
    btn.classList = "maz";
    btn.onclick = removeParent;
}

function addListAfterClick() {
    if (inputLength() > 0) {
        addListElement();
    } 
}

function addListAfterKeypress() {
    if (inputLength() > 0 && event.keyCode === 13) {
        addListElement();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// toggle exercise
ul.onclick = function(event) {
    var target = event.target;
    target.classList.toggle("done");
}

litemLength = function() {
    return litem.length;
}

deleteButton = function() {
   var bttn = document.createElement("Button");
   bttn.appendChild(document.createTextNode("Delete"));
   litem[i].appendChild(bttn);
   bttn.classList = "maz"
   bttn.onclick = function del(evvs) {
    evvs.target.parentNode.remove();
   }
}

for (var i = 0; i < litemLength(); i++) {
    deleteButton();
}

var removeParent = function(evt) {
    evt.target.parentNode.remove();
}

