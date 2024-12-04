const cars = [
  { model: "Toyota Corolla", price: 20000 },
  { model: "Honda Civic", price: 22000 },
  { model: "Ford Focus", price: 21000 },
  { model: "Chevrolet Malibu", price: 24000 },
  { model: "Nissan Altima", price: 23000 },
  { model: "Hyundai Elantra", price: 19500 },
  { model: "Kia Optima", price: 22500 },
  { model: "Volkswagen Jetta", price: 23500 },
  { model: "Subaru Impreza", price: 21500 },
  { model: "Mazda3", price: 20500 },
  { model: "BMW 3 Series", price: 42000 },
  { model: "Mercedes-Benz C-Class", price: 45000 },
  { model: "Audi A4", price: 41000 },
  { model: "Lexus IS", price: 43000 },
  { model: "Tesla Model 3", price: 40000 },
  { model: "Volvo S60", price: 39000 },
  { model: "Acura TLX", price: 37500 },
  { model: "Infiniti Q50", price: 38500 },
  { model: "Cadillac CT5", price: 36000 },
  { model: "Jaguar XE", price: 45000 },
];

const total = cars.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);
