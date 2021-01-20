class Notebook {
  constructor(noteClass = Note) {
    this.notesArray = []
    this.noteClass = noteClass
  }

  getNotesArray() {
    return this.notesArray
  }

  add(text) {
    var note = new this.noteClass(text)
    this.notesArray.push(note)
  }
};
