let buttonOne = document.querySelector('#skill-check');
let buttonTwo = document.querySelector('#modal-check');

function mathPuzzle() {
  buttonOne.addEventListener('click', function(e) {
    e.preventDefault();

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
  });
}

function fireMath() {
  let pTag = document.querySelector('#genius');
  let name = prompt('...and what is your name?');
  let div = document.querySelector('#post-math');
  let button = document.querySelector('#pre-math');
  let newModalButton = document.querySelector('#modal-check');
  button.classList.add('hidden');
  button.classList.remove('modal-button');
  div.classList.remove('hidden');
  newModalButton.classList.add('modal-button');
  pTag.innerHTML += `${name[0].toUpperCase()}${name.slice(1, name.length)}, you GENIUS! Come on in`;
}

function fireModal() {
  buttonTwo.addEventListener('click', function(e) {
    e.preventDefault();

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

    let modal = document.querySelector('#modal');
    let modalHeader = document.querySelector('#modal-header h2');
    let modalBody = document.querySelector('#modal-body');
    let h2TitleDescription = "<h2>" + titleDescription + "</h2>";
    let linkImg = "<img src=" + link + "><br>";
    let pModalDescription = "<p id='modal-description'>" + houseDescription + "</p>";

    // need to do:t modal =
    // 1) change class of div#modal
    modal.classList.toggle('hidden');
    // 2) append h2 with title description to div#modal-header
    modalHeader.innerHTML = h2TitleDescription;
    // 3) append img tag with src of link var + br + a p#modal-description
    modalBody.innerHTML = linkImg + pModalDescription;
    for(let i = 0; i < modal.children.length; i++) {
      if (modal.children[i].classList.contains('hidden')) {
        modal.children[i].classList.toggle('hidden');
      };
    };
    modal.classList.toggle('hidden');
    closeModal();
  });
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

function closeModal() {
  let body = document.querySelector('body');
  let close = document.querySelector('#close')
  let modal = document.querySelector('#modal')

  close.addEventListener('click', function(e) {
    e.preventDefault();
    for(let i = 0; i < modal.children.length; i++) {
      if (!modal.children[i].classList.contains('hidden')) {
        modal.children[i].classList.toggle('hidden');
      };
    };
  });
  modal.classList.toggle('hidden')
  fireModal();
}

(function() {
  //create event listener for click on button
  mathPuzzle();
  fireModal();
}());
