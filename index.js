const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
cars[0] = "opel";
console.log(cars);
console.log(cars.length);
let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + " ";
}
console.log(text);
