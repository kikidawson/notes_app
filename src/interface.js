// function ready(sendNote) {
//   if (document.readyState != 'loading') {
//     console.log('Please wait for the DOM to load')
//
//   } else {
//     document.addEventListener('DOMContentLoaded', sendNote)
//     console.log('DOM has loaded')
//   }
// }

var notes = new Notes();
let button = document.getElementById('create-note')

button.addEventListener("click", function() {

  let area = document.getElementById('new-note')
  let text = area.value
  let note = text
  area.value = ''

  notes.add(note)

  displayNotes()
})


// function sendNote() {
//   var getNote = document.getElementById("new-note").value
//   notes.add(getNote)
//   document.getElementById("new-note").value = "" //Clean the input after sending
//   event.preventDefault();
//   var createNote = document.createElement("P")
//   createNote.innerText = notes.notesArray.pop()
//   document.getElementById("notes-wrapper").appendChild(createNote);
// }

// ready()

function displayNotes() {
  let noteDiv = document.getElementById('notes-wrapper')
  noteDiv.innerHTML = ''

  notes.getNotesArray().forEach(function(note) {
    let textElement = document.createElement('p')
    textElement.textContent = note.substring(0,20) + '...'
    noteDiv.appendChild(textElement)
  });

}
