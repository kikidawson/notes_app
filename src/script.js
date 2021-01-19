class Notes {
  constructor() {
    this.notesArray = []  
  }

  getNotesArray() {
    return this.notesArray
  }

  add(body) {
    this.notesArray.push(body)
  }
};
