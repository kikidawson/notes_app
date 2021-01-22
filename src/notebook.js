class Notebook {
  constructor(noteClass = Note) {
    this.notesArray = []
    this.noteClass = noteClass
  }

  getNotesArray() {
    this.loadLocalStorage()
    return this.notesArray
  }

  add(note) {
    this.notesArray.push(note)
    this.saveLocalStorage()
  }
  saveLocalStorage() {
    localStorage.setItem("notebook", JSON.stringify(this.getNotesArray()))
  }
  loadLocalStorage() {
    let returnStorage = localStorage.getItem("notebook")
    console.log(JSON.parse(returnStorage))
  }
};