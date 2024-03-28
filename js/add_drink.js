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
  var drinkName = document.getElementById("drink_name").value;
  // var drinkType = document.getElementById("drink_type").value; add later
  var drinkDescription = document.getElementById("drink_description").value;
  var h2 = document.createElement("h2");
  var paragraph = document.createElement("p")
  if (drinkName === '' || drinkDescription === '') {
    alert("You must fill out out both the name and description!");
  } else {
    //add close button
    var button = document.createElement("button");
    var txt = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(txt);
    li.appendChild(button);

    //add value to h2 and paragraph
    h2.className = "anton-regular";
    var textDrinkName = document.createTextNode(drinkName);
    // var textDinkType = document.createTextNode(drinkType); add later
    var textDrinkDescription = document.createTextNode(drinkDescription);
    h2.appendChild(textDrinkName);
    paragraph.appendChild(textDrinkDescription);
    li.appendChild(h2);
    li.appendChild(paragraph);
    //add new item to the list
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("drink_name").value = "";
  
}