const cars = ["Saab", "Volvo", "BMW"];
let text = "";
cars.forEach(plus);

function plus(value) {
  text += "`" + value + "`" + " ";
}

console.log(text);
