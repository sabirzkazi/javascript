const cars = ["Saab", "Volvo", "BMW"];
cars.push("Hondai");
let text = "";
cars.forEach(plus);

function plus(value) {
  text += "`" + value + "`" + " ";
}

console.log(text);
