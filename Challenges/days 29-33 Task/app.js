let courseName = "100 Days of Code";
let priceCourse = 200;
let goalCourse = ["developer", "rich", "ford raptor"];

alert(courseName);
alert(priceCourse);
alert(goalCourse);

let mainGoal = [courseName, priceCourse, goalCourse];
alert(mainGoal[2]);

function alertCommand(num) {
  return mainGoal[num];
}

mainGoal = alertCommand(1);
alert(mainGoal);
