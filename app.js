let card_title_value = "";
let title_card = (document.getElementById("title-card").innerHTML =
  card_title_value);
let card_desc = (document.getElementById("card-paragraph").innerHTML =
  card_title_value);

//title_card =document.getElementById('title-card').innerHTML=userInput;
//not necessary but only for debugging purposes

let simpleAlert = () => {
  alert("Simple alert message");
};

let addNewCardTitle = () => {
  //using userInput as a capture device
  let userInput = prompt("Choose A Title");

  title_card = document.getElementById("title-card").innerHTML = userInput;

  userInput = prompt("Choose A Description");

  title_card = document.getElementById("card-paragraph").innerHTML = userInput;
};

let killCard = () => {
  alert("Card is resetted");
  title_card = document.getElementById("title-card").innerHTML =
    card_title_value;
  card_desc = document.getElementById("card-paragraph").innerHTML =
    card_title_value;
};
