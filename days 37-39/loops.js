for (let i = 0; i < 10; i++) {
  console.log(i);
}

const cars = ["ford raptor", "toyota", "mercedes"];

for (const car of cars) {
  console.log(car);
}

const propertyObjects = {
  name: "Max",
  car: "Ford",
  lang: "Ukraine",
};

for (const storeObject in propertyObjects) {
  console.log(storeObject);
  console.log(propertyObjects[storeObject]);
}

let isFinished = false;

// while (!isFinished) {
//   confirm("Do you want quit?");
// }
// console.log("Done");
