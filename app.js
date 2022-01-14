var button = document.getElementById("enter");
var input = document.getElementById("input");
var list = document.querySelector("ul");
//var RemoveButton = document.createElement("button");

function createListElements() {
  var newlist = document.createElement("li");
  newlist.appendChild(document.createTextNode(input.value));
  var RemoveButton = document.createElement("button");
  RemoveButton.innerHTML = "Delete Entry!";
  //RemoveButton.appendChild(document.createTextNode("Delete Entry!"));
  list.append(newlist, RemoveButton);
  RemoveButton.addEventListener("click", function () {
    list.removeChild(newlist);
    list.removeChild(RemoveButton);
  });
  input.value = "";
}

button.addEventListener("click", function () {
  if (input.value != "") {
    createListElements();
  }
});

//For keyboard enter action
input.addEventListener("keypress", function (e) {
  //console.log(e);
  if (input.value != "" && e.keyCode == 13) {
    createListElements();
  }
});
