function ready(sendNote) {
  if (document.readyState != 'loading') {
    console.log('this Hello')
    fn()

  } else {
    document.addEventListener('DOMContentLoaded', sendNote)

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