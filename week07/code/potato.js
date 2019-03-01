// week 7 - code
// console.log("hello worlds!"); 	

function clickButton() {
	console.log("‼️");
}

const theClick = document.querySelector('#thisAwesomeButton');
theClick.addEventListener('click', clickButton);

const them = {
  jared: 56,
  michael: 30,
  donald: 91
};

them.mary = 42;

let newName = 'michelle';
them[newName] = 21;

for (let name in them) {
console.log(name + ' is ' + them[name]);
}

// *********    ------------------------- **********

// adding an event parameter into our function
// + a property of the element object, "textContent"
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent

function whatHappens(theEvent) {
  // const myImage = document.querySelector('img');
  const myImage = theEvent.currentTarget;
  myImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Emoji_u1f914.svg/360px-Emoji_u1f914.svg.png'

  const myTitle = document.querySelector('h4');
  myTitle.textContent = 'This is what happens!'

  myImage.removeEventListener('click', whatHappens);
}

const myImage = document.querySelector('img');
myImage.addEventListener('click', whatHappens);

// *********    ------------------------- **********

// Another way to do: change the HTML elements dynamically
// Create an empty div (a containter index.html file line 23) 
//         to access + add html elements

// function whatHappens(theEvent) {
//   const newHeader = document.createElement('h4');
//   newHeader.textContent = "this is what happens, yo!";
//   const myImage = document.createElement('img');
//   myImage.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Emoji_u1f914.svg/360px-Emoji_u1f914.svg.png';

//   const myContainer = document.querySelector('#theContainer');
//   myContainer.innerHTML = '';
//   myContainer.appendChild(newHeader);
//   myContainer.appendChild(myImage);

// }

// const myImage = document.querySelector('img');
// myImage.addEventListener('click', whatHappens);


// *********    ------------------------- **********

// Another way to do: using the display property
// will need HTML from index.html file, line 32
// + CSS from style.css file line 23.
// https://developer.mozilla.org/en-US/docs/Web/CSS/display

// function whatHappens(theEvent){
// 	const myImage = event.currentTarget;
// 	myImage.removeEventListener('click', whatHappens);

// 	const beforeTheClick = document.querySelector('#beforeClick');
// 	const afterTheClick = document.querySelector('#afterClick');

// 	beforeTheClick.classList.add('theInvisible');
// 	afterTheClick.classList.remove('theInvisible');
// }
// const myImage = document.querySelector('#picB4Click');
// myImage.addEventListener('click', whatHappens);





  
 


