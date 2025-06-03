var nodeList = document.querySelectorAll("div.items-desc");
for (var i = 0, length = nodeList.length; i < length; i++) {
     // Create a new div element
    const newDiv = document.createElement("p");
    // Optionally, add some content or attributes to the new div
    newDiv.innerHTML = "Soup of the day is: Soup du jour";
    nodeList[i].appendChild(newDiv);
  }