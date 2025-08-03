function openPlayerConfig(event) {
  editedPlayer = event.target.dataset["playerid"]; // + '1' => 1
  playerConfigOverLayElement.style.display = "block";
  backdropElement.style.display = "block";
}

function closePlayerConfig() {
  playerConfigOverLayElement.style.display = "none";
  backdropElement.style.display = "none";
  formElement.firstElementChild.classList.remove("error");
  formElement.firstElementChild.lastElementChild.value = "";
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

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
