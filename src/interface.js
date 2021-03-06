var notebook = new Notebook();
let button = document.getElementById('create-note')

window.onload = function() {
  console.log("window.onload")
  notebook.loadLocalStorage();
} 

button.addEventListener("click", () => {
  let area = document.getElementById('new-note')
  let text = area.value
  area.value = ''
  emojify(text)

})

function emojify(text) {
  getPostData(text).then(post => {
    let rendered = renderPost(post)
    let note = new Note(rendered)
    notebook.add(note)
    displayNotes()
    createDivs()
  })
}

function displayNotes() {
  let noteDiv = document.getElementById('notes-wrapper')
  noteDiv.innerHTML = ''

  notebook.getNotesArray().forEach(function (note, index) {
    let getElement = note.getDisplayElement()
    let getAnchor = getElement.getElementsByTagName('a');
    getAnchor[0].setAttribute("href", `#${index}`);
    noteDiv.appendChild(getElement)
  });
}

function closeAnchorButton() {
  let closeAnchor = document.createElement('a')
  closeAnchor.setAttribute("href", "#close");
  closeAnchor.setAttribute("title", "Close");
  closeAnchor.setAttribute("class", "close");
  closeAnchor.innerHTML = 'X'
  return closeAnchor
}

function createModal(index) {
  let outerDiv = document.createElement('div')
  outerDiv.setAttribute("id", `${index}`);
  outerDiv.setAttribute("class", "modalDialog");
  return outerDiv
}

function createInnerModal(note) {
  let innerDiv = note.getDivElement()
  innerDiv.appendChild(closeAnchorButton())
  return innerDiv
}

function createDivs() {
  let fullTextDiv = document.getElementById('full-text-wrapper')
  fullTextDiv.innerHTML = ''
  notebook.getNotesArray().forEach(function (note, index) {
    let outerDiv = createModal(index)
    let innerDiv = createInnerModal(note)
    fullTextDiv.appendChild(outerDiv)
    outerDiv.appendChild(innerDiv)
  });
}

function getPostData(text) {
  const data = {
    "text": text
  }

  return fetch("https://makers-emojify.herokuapp.com/", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      return response.json()
    });
}

function renderPost(postData) {
  let postWithEmojis = postData.emojified_text;

  return `${postWithEmojis}`;
}

// function saveLocalStorage() {
//   localStorage.setItem("notebook", JSON.stringify(notebook.getNotesArray()))
//   console.log(localStorage)
// }