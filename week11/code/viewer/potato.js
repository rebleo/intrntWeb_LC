// console.log("hello worlds!");
const theirName = document.querySelector('input');
const theButton = document.querySelector('#thisAwesomeButton');
theButton.addEventListener('click', whatHappens);
// *********    ------------------------- **********
function whatHappens(theEvent) {
  console.log("yay!!");
}
const nameData = theirName.value;
