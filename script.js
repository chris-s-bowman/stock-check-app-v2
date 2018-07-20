// functions for querySelector and createElement

function $(el) {
  return document.querySelector(el);
}
function create(el) {
  return document.createElement(el);
}


// array of bumper names
var bumpers = ["083 Front", "083 Low Grade Rear", "083 High Grade Rear", "B12P Front", "B12P Rear", "724 Front Upper", "724 Front Lower", "724 Rear Upper", "724 Rear Lower", "Nismo Rear", "GD1A GT Front", "GD1A Sport Front", "GD1A All Road Front", "GD1A GT/Sport Rear Upper", "GD1A All Road Rear", "GD1A Lower #1", "GD1A Twin Lower", "GD1A Sport Lower" ];

var form = $("form");

var bumperObject = []
 // var bumperObject = JSON.parse(localStorage.getItem('bumperObject') || "{}");

var deleteArr = [];
var calculateArr = [];
var labelArr = [];
var selectArr = [];
var valueArr = [];

for(var i = 0; i < bumpers.length; i++) {
  bumperObject[i] = new Object();
  bumperObject[i].name = bumpers[i]

}
//Creating arrays of object values
for(var i = 0; i < bumpers.length; i++) {
  var label = create("label");
  label.setAttribute("for", bumperObject[i].name);
  label.innerHTML = bumperObject[i].name;
  labelArr.push(label);
  form.appendChild(label);


  var select = create("select");
  label.appendChild(select);
  select.classList.add("select");
  selectArr.push(select);
//Creating Select Options
    for(var j = 1; j < 100; j++){
    var option = document.createElement("option");

    option.text = j;
    select.appendChild(option);
    }

  var buttonDiv = create("div");
  buttonDiv.classList.add("buttonDiv");
  label.appendChild(buttonDiv);

  // var del = create("button");
  // del.innerHTML = "DEL";
  // del.setAttribute("type", "button");
  // del.classList.add("del");
  // buttonDiv.appendChild(del);
  // deleteArr.push(del);

  // var calc = create("button");
  // calc.innerHTML = "Calculate";
  // calc.setAttribute("type", "button");
  // calc.classList.add("calc");
  // buttonDiv.appendChild(calc);
  // calculateArr.push(calc);

  // var value = create("div");
  // value.innerHTML = 0;
  // value.classList.add("values");
  // label.appendChild(value);
}

for(var i = 0; i < bumpers.length; i++) {
  bumperObject[i].label = labelArr[i];
  bumperObject[i].label.buttonDiv = buttonDiv;
  // bumperObject[i].label.buttonDiv.calc = calculateArr[i]
  bumperObject[i].label.buttonDiv.del = deleteArr[i];
  bumperObject[i].label.value = valueArr[i];
  bumperObject[i].label.count = 0;
  bumperObject[i].label.select = selectArr[i];
  if (bumperObject[i].name.includes("GD1A") && bumperObject[i].name.includes("Lower")) {
    bumperObject[i].label.snp = 15;
  }
  else if (bumperObject[i].name.includes("GD1A")) {
    bumperObject[i].label.snp = 9;
  }
  else if (bumperObject[i].name.includes("B12P")) {
    bumperObject[i].label.snp = 8;
  }
  else {
    bumperObject[i].label.snp = 12;
  }
}
var buttonDivArr = Array.from(document.getElementsByClassName("buttonDiv"))
buttonDivArr.forEach(el => {

  var del = create("button");
  del.innerHTML = "DEL";
  del.setAttribute("type", "button");
  del.classList.add("del");
  el.appendChild(del);
  deleteArr.push(del);
  el.parentElement.deleteButton = del

  var calc = create("button");
  calc.innerHTML = "Calculate";
  calc.setAttribute("type", "button");
  calc.classList.add("calc");
  // buttonDiv.appendChild(calc);
  calculateArr.push(calc);
  el.appendChild(calc);
  el.parentElement.calcButton = calc
// Value is the display number
  var value = create("div");
  value.classList.add("values");
  el.parentElement.appendChild(value);

  if(localStorage.getItem(el.parentElement.htmlFor) === null) {
    value.innerHTML = 0;
  }
  else {
    value.innerHTML = localStorage.getItem(el.parentElement.htmlFor)
  }
// Result is the backend number stored in the object
calc.addEventListener("click", () => {
  value.innerHTML = value
  el.parentElement.count += Number(el.parentElement.select.value);
  value.innerHTML = el.parentElement.count * el.parentElement.snp;
  el.parentElement.result = el.parentElement.count * el.parentElement.snp;


});

del.addEventListener("click", () => {
  el.parentElement.count = 0;
  el.parentElement.result = 0;
  value.innerHTML = 0;
  console.log(el.parentElement);
})
})

bumperObject.forEach(el => {
  // console.log(el.label.deleteButton);
  // console.log(el.label.calcButton);
  // console.log(el.label.value);

  el.label.calcButton.addEventListener("click", () => {
    el.result = el.label.result;
    localStorage.setItem(el.name, el.result)
    // console.log(el);
  });
  el.label.deleteButton.addEventListener("click", () => {
    localStorage.removeItem(el.name)
  })
})

var saveButton = $(".save");
saveButton.addEventListener("click", () => {
  for(var i = 0; i < bumperObject.length; i++){
    localStorage.setItem(bumperObject[i].name, (bumperObject[i].result));
    // console.log(bumperObject[i].label.result);
  }
});
