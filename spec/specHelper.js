function expect(actual) {
  return {

    toEqual: function(expected) {
      if (actual.constructor.name === "Array") {
        if (actual.length != expected.length) {
          return document.write("Fail - Array size different. <br>")
        }
        for (let i = 0; i < actual.length; i++) {
          if (expected[i] != actual[i]) {
            return document.write("Fail <br>")
          } else {
            return document.write("Pass <br>")
          }
        }
      }
      if (actual === expected) {
        document.write("Pass <br>")
      } else {
        document.write("Fail <br>")
      }
    },

    isTrue: function() {
      if (actual) {
        document.write("Pass <br>")
      } else {
        document.write("Fail <br>")
      }
    }
  }
}

function it(label, callback) {
  document.write(`---> Test: ${label}: `)
  callback()
}

function describe(label, callback) {
  document.write(`<br>Context: ${label} <br>`)
  callback()
}


