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

  if (solution === equationForSolution) {
    fireMath();
  } else {
    alert("This site won't be getting any more fun for you -__-");
  }
}

function fireMath() {
  let pTag = document.querySelector('p');
  let name = prompt('...and what is your name?');
  let div = document.querySelector('#post-math');
  let button = document.querySelector('#pre-math');
  button.classList.add('math-unlock');
  button.classList.remove('modal-button');
  div.classList.remove('math-unlock');
  pTag.innerHTML += `<br><br>${name[0].toUpperCase()}${name.slice(1, name.legth)}, you GENIUS! Come on in`;
}

function fireModal() {
  
}
