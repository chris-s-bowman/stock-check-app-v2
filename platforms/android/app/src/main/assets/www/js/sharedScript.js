  var bumpers = ["083 Front", "083 Low Grade Rear", "083 High Grade Rear", "B12P Front", "B12P Rear", "724 Front Upper", "724 Front Lower", "724 Rear Upper", "724 Rear Lower", "Nismo Rear", "GD1A GT Front", "GD1A Sport Front", "GD1A All Road Front", "GD1A GT/Sport Rear Upper", "GD1A All Road Rear", "GD1A Lower #1", "GD1A Twin Lower", "GD1A Sport Lower" ];


  var container = document.querySelector(".container");
  var table = document.createElement("table");
  table.style.width = "50%";
  table.setAttribute("border", "1");
  container.appendChild(table);
  var tableHeaderRow = document.createElement("tr");
  table.appendChild(tableHeaderRow);
  var tablePartName = document.createElement("th");
  tablePartName.innerHTML = "Part Name";
  tableHeaderRow.appendChild(tablePartName);
  var tableAmount = document.createElement("th");
  tableAmount.innerHTML = "Number of Parts"
  tableHeaderRow.appendChild(tableAmount);
  var tableBalance = document.createElement("th");
  tableBalance.innerHTML = "Balance";
  tableHeaderRow.appendChild(tableBalance);

  for(var i = 0; i < bumpers.length; i++){
    var newRow = document.createElement('tr');
    table.appendChild(newRow);
    var colOne = document.createElement("td");
    colOne.innerHTML = bumpers[i];
    newRow.appendChild(colOne);
    var colTwo = document.createElement("td");
    colTwo.innerHTML = localStorage.getItem(bumpers[i]);
    newRow.appendChild(colTwo);
    var colThree = document.createElement("td");
    colThree.innerHTML = localStorage.getItem(bumpers[i]) - localStorage.getItem(bumpers[i] + 'value');
    newRow.appendChild(colThree);

    // if(colThree.innerHTML < 0) {
    //   colThree.style.color = "red";
    // }
    // else if (colThree.innerHTML == 0) {
    //   colThree.style.color = "black";
    // }
    // else if(colThree.innerHTML > 0) {
    //   colThree.style.color = "green";
    //
    // }
  }
}
