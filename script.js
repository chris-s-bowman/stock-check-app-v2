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

}

for(var i = 0; i < bumpers.length; i++) {
  bumperObject[i].label = labelArr[i];
  bumperObject[i].label.buttonDiv = buttonDiv;

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
// creating delete and calculate buttons
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
  calculateArr.push(calc);
  el.appendChild(calc);
  el.parentElement.calcButton = calc
// Value is the display number
  var value = create("div");
  value.classList.add("values");
  el.parentElement.appendChild(value);
// if statement -- if local storage doenst exist, set value to 0...
  if(localStorage.getItem(el.parentElement.htmlFor) === null) {
    value.innerHTML = 0;
  }
// else -- use local storage for value
  else {
    value.innerHTML = localStorage.getItem(el.parentElement.htmlFor);
    el.parentElement.count = value.innerHTML / el.parentElement.snp;
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

var totalsDiv = $(".totals");
// created totals and made them equal the values from above
bumperObject.forEach(el => {

  var totalsName = create("div")
  totalsName.innerHTML = el.name;
  totalsDiv.appendChild(totalsName);

  var totalsValue = create("div");
  if(localStorage.getItem(el.name) === undefined) {
    totalsValue.innerHTML = 0;
  }
  else {
    totalsValue.innerHTML = Number(localStorage.getItem(el.name));
  }
  totalsDiv.appendChild(totalsValue);
  // for each calc button create another result element. This is used for localStorage
    el.label.calcButton.addEventListener("click", () => {
    el.result = el.label.result;
    localStorage.setItem(el.name, el.result);
    totalsValue.innerHTML = el.result;

  });
  el.label.deleteButton.addEventListener("click", () => {
    localStorage.removeItem(el.name)
    totalsValue.innerHTML = 0;
  })
})


// TODO: add number input, add new div to store Result. number input - amount of bumpers. If positive number GREEN - if negative number RED & add a - in front. 
