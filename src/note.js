class Note {
  constructor(text) {
    this.text = text
  }

  getText() {
    return this.text
  }

  getDisplayElement() {
    let textElement = document.createElement('p')
    textElement.textContent = this.getText().substring(0,20) + '...'
    return textElement
  }
}
