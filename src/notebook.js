class Notebook {
  constructor(noteClass = Note) {
    this.notesArray = []
    this.noteClass = noteClass
  }

  getNotesArray() {
    return this.notesArray
  }

  add(note) {
    this.notesArray.push(note)
  }
};
