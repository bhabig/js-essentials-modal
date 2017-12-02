(function() {
  // select button
  button = document.querySelector('.modal-button');

  //create event listener for click on button
  button.addEventListener('click', (e) => {
    e.preventDefault();
    mathPuzzle();
  })
}())

function mathPuzzle() {
  let num1 = Math.floor(Math.random() * 50);
  let num2 = Math.floor(Math.random() * 50);
  const equationForPrompt = `(${num1} / 2) * (${num2} / 2) - 15`;
  const equationForSolution = (num1 / 2) * (num2 / 2) - 15;
  let solution = parseInt(prompt(`Solve this equation to enter: ${equationForPrompt}`));
  let div = document.querySelector('.math-unlock')

  if (solution === equationForSolution) {
    fireModal();
  } else {
    alert("This site won't be getting any more fun for you -__-");
  }
}

function fireModal() {
  let pTag = document.querySelector('p');
  let name = prompt('...and what is your name?');
  div.classList.remove('math-unlock');
  pTag.innerHTML += `<br><br>${name[0].toUpperCase()}${name.slice(1, name.legth)}, you GENIUS! Come on in`;
}
