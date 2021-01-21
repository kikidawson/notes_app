class Note {
  constructor(text) {
    this.text = text
  }

  getText() {
    return this.text
  }

  getDisplayElement() {
    let paraElement = document.createElement('p')
    let textElement = document.createElement('a')
    paraElement.appendChild(textElement)
    textElement.textContent = this.getText().substring(0,20) + '...'
    return paraElement
  }

  getDivElement() {
    let divElement = document.createElement('div')
    divElement.textContent = this.getText()
    return divElement
  }
}
