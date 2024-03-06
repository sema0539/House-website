// Create a "close" button and append it to each list item
var myNodelist = document.getElementById("menuListItem");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var button = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
// Create a new list item when clicking on the "Add" button
function newElement() {
  //new item to add to the list var
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var h2 = document.createElement("h2");
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    //add close button
    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);

    //add value to h2
    h2.className = "anton-regular";
    var drink = document.createTextNode(inputValue)
    h2.appendChild(drink);
    li.appendChild(h2);
    //add new item to the list
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
  
}