// document.body.children[1].children[0].href = "https://google.com";
let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("#external-link");
anchorElement.href = "https://youtube.com";

// Create new element in JS
let newAnchorElement = document.createElement("a");
// Get acces to parent element which hold new element
let firstParagraph = document.querySelector("p");
//Insert the new element into the parent element
firstParagraph.append(newAnchorElement);
newAnchorElement.href = "https://riotgames.com";
newAnchorElement.textContent = "Valorant";

// REMOVE ELEMENTS
// SELECT ELEMENTS THAT SHOULD BE REMOVED
let remH1Element = document.querySelector("h1");
//  REMOVE IT
// remH1Element.remove();
//  2
// remH1Element.parentElement.removeChild(remH1Element);

// //MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph);

// inner HTML

console.log(firstParagraph.textContent);

firstParagraph.innerHTML =
  "Hi this is new method innerHTML <strong>very good</strong>";
