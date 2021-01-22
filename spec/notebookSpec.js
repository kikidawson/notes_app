describe('Notebook Class', () => {

  describe("#new", () => {
    it("Should be new instance of class", () => {
      var notebook = new Notebook();
      expect(notebook).isTrue();
    })
  });

  describe("#add", () => {
    it("Allows new notes to be added", () => {
      var notebook = new Notebook();
      notebook.add("First Note")
      expect(notebook.getNotesArray()).toEqual(["First Note"])
    })

    it("Can add multiple notes", () => {
      var notebook = new Notebook();
      notebook.add("First note")
      notebook.add("Second note")
      expect(notebook.getNotesArray()).toEqual(["First note", "Second note"])
    })
  });

  // it("Should check CSS red failure", () => {
  //   var notebook = new Notebook();
  //   notebook.add("FAIL ONE")
  //   expect(notebook.getNotesArray()).toEqual(['SHOULD FAIL'])
  // })
});
