console.log("i am a great client side javascript thing");
//
//
const theClick = document.querySelector('#thisAwesomeButton');
theClick.addEventListener('click', whatHappens);
//
const theUser = document.querySelector("#theUser");
console.log(theUser.value);

function whatHappens(theEvent) {
  console.log("click");
}
