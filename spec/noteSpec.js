describe("#new", () => {
  it("Should be new instance of class", () => {
    var notes = new Notes();
    expect(notes).isTrue();
  })
});

describe("#add", () => {
  it("Allows new notes to be added", () => {
    var notes = new Notes();
    notes.add("First note")
    expect(notes.getNotesArray()).toEqual(["First note"])
  })

  it("Can add multiple notes", () => {
    var notes = new Notes();
    notes.add("First note")
    notes.add("Second note")
    expect(notes.getNotesArray()).toEqual(["First note", "Second note"])
  })

});
