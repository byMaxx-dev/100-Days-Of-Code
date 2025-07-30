function openPlayerConfig() {
  playerConfigOverLayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverLayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
}

function sabePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername").trim();
  console.log(enteredPlayername);

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add("error");
    errorsOutputElement.textContent = "Plaese enter a valid name";
    return;
  }
}
