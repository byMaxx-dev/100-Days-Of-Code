let paragraphElement = document.querySelector("p");

function changeParagraphText() {
  paragraphElement.textContent = "Clicked";
  console.log("Paragraph clicked");
}
paragraphElement.addEventListener("click", changeParagraphText);

let inputElement = document.querySelector("input");

function retrieveUserInput(event) {
  let enteredData = event.data;
  console.log(enteredData);
}

inputElement.addEventListener("input", retrieveUserInput);
