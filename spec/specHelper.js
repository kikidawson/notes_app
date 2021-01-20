function expect(actual) {
  return {

    toEqual: function(expected) {
      if (actual.constructor.name === "Array") {
        if (actual.length != expected.length) {
          return document.write("<css style='color: red>Fail</css> - Array size different. <p>")
        }
        for (let i = 0; i < actual.length; i++) {
          if (expected[i] != actual[i]) {
            return document.write("<css style='color: red'> Fail </css><p>")
          } else {
            return document.write("<css style='color: green'> Pass </css><p>")
          }
        }
      }
      if (actual === expected) {
        document.write("<css style='color: green'> Pass </css><p>")
      } else {
        document.write("<css style='color: red'> Fail </css><p>")
      }
    },

    isTrue: function() {
        if (actual) {
          document.write("<css style='color: green'> Pass </css><p>")
        } else {
          document.write("<css style='color: red'> Fail </css><p>")
        }
    }
  }
}

function it(label, callback) {
  try {
    document.write(`---> Test: ${label} ---> Result: `)
    callback()
  } catch(err) {
    document.write("<css style='color: red'> Error </css><p>")
  }
}

function describe(label, callback) {
  document.write(`${label}<p>`)
  callback()
}
