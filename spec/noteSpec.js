// function testCircleRadiusDefaultsTo10() {
//   var circle = new Circle();
//   assert.isTrue("Should be true", circle.radius === 10);
//   assert.isEqual("Should equal", circle.radius, 10)
//   assert.isEqual("Should equal", "kiki", "kiki")
// };
//
// testCircleRadiusDefaultsTo10();

function testNotes() {
  var notes = new Notes();
  assert.isTrue("Check class instantiated", notes)
}

testNotes()

function addNotes() {
  var notes = new Notes();
  notes.add("Our first note.")
  assert.isEqual("Allows notes to be added", notes.notesArray[0], ["Our first note."])
}

addNotes()

// function startsWithEmptyNotes() {
//   var notes = new Notes();
//   assert.isEqual()
// }
//
// startsWithEmptyNotes()
