// let courseName = "100 Days of Code";
// let priceCourse = 200;
// let goalCourse = ["developer", "rich", "ford raptor"];

// alert(courseName);
// alert(priceCourse);
// alert(goalCourse);

let mainGoal = {
  title: "100 Days of Code",
  price: "200",
  goalCourse: ["developer", "rich", "ford raptor"],
};
// alert(mainGoal.title);
// alert(mainGoal.price);
// alert(mainGoal.goalCourse);
function getListItem(array, arrayIndex) {
  let arrayElement = array[arrayIndex];
  return arrayElement;
}

let firstGoal = getListItem(mainGoal.goalCourse, 2);
alert(firstGoal);
