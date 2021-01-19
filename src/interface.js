function ready(sendNote) {
  if (document.readyState != 'loading') {
    console.log('Please wait for the DOM to load')
    fn()

  } else {
    document.addEventListener('DOMContentLoaded', sendNote)
    console.log('DOM has loaded')
  }
}

function sendNote() {
  var notes = new Notes();
  var getNote = document.getElementById("new-note").value
  notes.add(getNote)
  console.log(notes.notesArray)
  document.getElementById("new-note").value = "" //Clean the input after sending
  event.preventDefault();
}

ready()