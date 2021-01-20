describe("Note Class", () => {
  describe("#new", () => {
    it("Should be new instance of class", () => {
      var note = new Note("tester note");
      expect(note).isTrue();
    })

    it('Should take text as an argument', () => {
      var note = new Note("tester note");
      expect(note.getText()).toEqual("tester note")
    })
  });

  describe('#getDisplayElement', () => {
    it('Should return first 20 chars of the note', () => {
      var note = new Note("much longer tester note")
      expect(note.getDisplayElement().innerHTML).toEqual("much longer tester n...")
    })
  })
});
