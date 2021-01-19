function ready(sendNote) {
  if (document.readyState != 'loading') {
    console.log('Please wait for the DOM to load')
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', sendNote)
    console.log('DOM has loaded')
  }
}

var notes = new Notes();

function sendNote() {
  var getNote = document.getElementById("new-note").value
  notes.add(getNote)
  document.getElementById("new-note").value = "" //Clean the input after sending
  event.preventDefault();
  var createNote = document.createElement("P")
  createNote.innerText = notes.notesArray.pop()
  document.getElementById("notes-wrapper").appendChild(createNote);
}

ready()