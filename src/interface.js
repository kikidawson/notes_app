function ready(fn) {
  if (document.readyState != 'loading'){
      console.log('Hello')
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

function fn() {
  var notes = new Notes();
    console.log('Hello')
    document.getElementById("#create-note").addEventListener("click", function(event) {
    console.log('Hello')
    notes.add(document.getElementById('#new-note').value);
    event.preventDefault();
  }, false);
}

ready();
