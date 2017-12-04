(function() {
  // select button
  let buttonOne = document.querySelector('#skill-check');
  let buttonTwo = document.querySelector('#modal-check');
  //create event listener for click on button
  buttonOne.addEventListener('click', (e) => {
    e.preventDefault();
    mathPuzzle();
  });
  buttonTwo.addEventListener('click', (e) => {
    e.preventDefault();
    fireModal();
  });
}())

function mathPuzzle() {
  let num1 = Math.floor(Math.random() * 50);
  let num2 = Math.floor(Math.random() * 50);
  const equationForPrompt = `(${num1} / 2) * (${num2} / 2) - 15`;
  const equationForSolution = (num1 / 2) * (num2 / 2) - 15;
  let solution = parseInt(prompt(`Solve this equation to enter: ${equationForPrompt}`));

  if (Math.floor(solution) === Math.floor(equationForSolution)) {
    fireMath();
  } else {
    alert("This site won't be getting any more fun for you -__-");
  }
}

function fireMath() {
  let pTag = document.querySelector('#genius');
  let name = prompt('...and what is your name?');
  let div = document.querySelector('#post-math');
  let button = document.querySelector('#pre-math');
  button.classList.add('math-unlock');
  button.classList.remove('modal-button');
  div.classList.remove('math-unlock');
  pTag.innerHTML += `${name[0].toUpperCase()}${name.slice(1, name.legth)}, you GENIUS! Come on in`;
}

function fireModal() {
  const images = [
    './images/059b3019d51774cffea7e4c2c469cba2.jpg',
    './images/gryffindor.jpg',
    './images/hufflepuff.jpg',
    './images/no-muggles.jpg',
    './images/ravenclaw.jpg'
  ];

  let index = Math.floor(Math.random() * (5));

  let link = images[index];

  let houseDescription = description(index);

  let titleDescription = title(index);

  let modal = "<div id='modal'><div id='modal-header'><span id='close'>&times;</span><h2>" + titleDescription + "</h2></div><div id='modal-body'><img src='" + link + "'><br><p id='modal-description'>" + houseDescription + "</p></div><div id='modal-footer'><small>All House assignments are final. Don't like it? Should have been better. Try next life.</small></div></div>";

  let body = document.querySelector('body');

  body.innerHTML += modal;
}


function title(index) {
  switch(index) {
    case 0:
      return "Slytherine";
      break;
    case 1:
      return "Gryffindor";
      break;
    case 2:
      return "Hufflepuff";
      break;
    case 3:
      return "You're a Muggle...";
      break;
    case 4:
      return "Ravenclaw";
      break;
  }
}

function description(index) {
  switch(index) {
    case 0:
      return "You're a Slytherine. Just gross, bro.";
      break;
    case 1:
      return "You're the pride of the pack, you lion.";
      break;
    case 2:
      return "You're a badger, most likely. No one knows if that's good or bad....";
      break;
    case 3:
      return "You're just dumb. And not allowed.";
      break;
    case 4:
      return "You're not the rest. Whatever.";
      break;
  }
}
