// function ready(sendNote) {
//   if (document.readyState != 'loading') {
//     console.log('Please wait for the DOM to load')
//
//   } else {
//     document.addEventListener('DOMContentLoaded', sendNote)
//     console.log('DOM has loaded')
//   }
// }

var notebook = new Notebook();
let button = document.getElementById('create-note')

button.addEventListener("click", function() {
  let area = document.getElementById('new-note')
  let text = area.value
  area.value = ''
  let note = new Note(text)

  notebook.add(note)
  
  displayNotes()
})

function displayNotes() {
  let noteDiv = document.getElementById('notes-wrapper')
  noteDiv.innerHTML = ''

  notebook.getNotesArray().forEach(function(note,index) {
    let getElement = note.getDisplayElement()
    let getAnchor = getElement.getElementsByTagName('a');
    getAnchor[0].setAttribute("href", `#${index}`);
    getAnchor[0].setAttribute("id", `${index}`);
    noteDiv.appendChild(getElement)
  });

}
