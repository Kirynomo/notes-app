const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem('notes');
}
showNotes();

function updateStorage() {
  localStorage.setItem('notes', notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  inputBox.setAttribute('contenteditable', 'true')
  img.src = 'images/delete.png';
  img.setAttribute('contenteditable', 'false')
  notesContainer.appendChild(inputBox).appendChild(img);
})

//work on this
notesContainer.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG') {
    e.target.parentElement.remove();
    updateStorage();
  }
  else if(e.target.tagName === 'P') {
    notes = document.querySelectorAll('.input-box');
    notes.forEach(nt => {
      nt.onkeyup = function() {
        updateStorage();
        // like an auto save function as u type
      }
    });
  }
})

document.addEventListener('keydown', event => {
  if(event.key === 'Enter') {
    document.execCommand('insertLineBreak');
    event.preventDefault();
  }
})

/*
e.target: The HTML element you clicked.
e.target.tagName: The name of the element you clicked (IMG, P, DIV, etc).
document.execCommand('insertLineBreak'): Instead of default Enter behavior, force a <br> line break.
event.preventDefault(): Stop the browser from doing its default Enter behavior.
*/