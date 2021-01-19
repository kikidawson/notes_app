var assert = {
  isTrue: function (description, assertionToCheck) {
    if (!assertionToCheck)
      document.write(description + ": " + assertionToCheck + " is not truthy <br>")
    else
      document.write(description + ": " + assertionToCheck + " is truthy. <br>")
  },
  isEqual: function (description, assertionToCheck, answer) {
    if (assertionToCheck != answer)
      document.write(description + ": " + assertionToCheck + " is not equal to " + answer + "<br>")
    else
      document.write(description + ": " + assertionToCheck + " is equal to " + answer + "<br>")
  }
}