let hobbies = ["fishing", "cooking", "reading", "gaming", "sports"];
let age = 18;
alert(hobbies[0]);

let job = {
  title: "developer",
  place: "home",
  salary: 500,
};

let adultYears;

function calculateAdultYears(userAge) {
  let result;
  result = userAge - 18;
  return result;
}

adultYears = calculateAdultYears(age);
alert(adultYears);

age = 45;
adultYears = calculateAdultYears(age);
alert(adultYears);
