var assert = {
  isTrue: function (description, assertionToCheck) {
    if (!assertionToCheck)
      document.write("Failed: " + description + " " + assertionToCheck + " is not truthy <br>")
    else
      document.write("Passed: " + description + " " + assertionToCheck + " is truthy. <br>")
  },
  isEqual: function (description, assertionToCheck, answer) {
    if (assertionToCheck != answer)
      document.write("Failed: " + description + " " + assertionToCheck + " is not equal to " + answer + "<br>")
    else
      document.write("Passed: " + description + " " + assertionToCheck + " is equal to " + answer + "<br>")
  }
}
