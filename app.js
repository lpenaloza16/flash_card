let card_title_value = "";
let title_card = (document.getElementById("title-card").innerHTML =
  card_title_value);
let card_desc = (document.getElementById("card-paragraph").innerHTML =
  card_title_value);

//title_card =document.getElementById('title-card').innerHTML=userInput;
//not necessary but only for debugging purposes

function simpleAlert() {
  alert("Simple alert message");
}

function addNewCardTitle() {
  //using userInput as a capture device
  let userInput = prompt("Choose A Title");

  title_card = document.getElementById("title-card").innerHTML = userInput;

  userInput = prompt("Choose A Description");

  title_card = document.getElementById("card-paragraph").innerHTML = userInput;
}

function killCard() {
  //FOR DEBUGGING alert("Card is resetted");
  title_card = document.getElementById("title-card").innerHTML =
    card_title_value;
  card_desc = document.getElementById("card-paragraph").innerHTML =
    card_title_value;
}
// below are functions needed to be execute the settings panel

// function openCreate() {
//   let blob = "Leo";
//   //FOR DEBUGGING alert("You've pressed create");
//   userInput = prompt("Choose A Description");
//   document.getElementById(
//     "content_wrapper"
//   ).innerHTML = `<div id="cloned_card" class="card-container"></div>`;
//   document.getElementById(
//     "cloned_card"
//   ).innerHTML = `<h2 id="title-card">Title</h2> <p id="card-paragraph">text content</p>`;
//   document.getElementById(
//     "card-paragraph"
//   ).innerHTML = `<ul class="card-options-ul">
// <li onclick="addNewCardTitle()" class="card-options-li">New Card</li>

// <li onclick="killCard()" class="card-options-li">Remove Card</li>

// </ul>`;
// }
