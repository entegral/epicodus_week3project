// Back-end
function checkZero(num) {
  var numArray = num.toString().split("")
  for (var digit = 0; digit < numArray.length; digit++) {
    if (numArray[digit] == "0") {
      return true;
    }
  }
  return false;
};

function checkOne(num) {
  var numArray = num.toString().split("")
  for (var digit = 0; digit < numArray.length; digit++) {
    if (numArray[digit] == "1") {
      return true;
    }
  }
  return false;
};

function checkDivisible(num) {
  num = parseInt(num)
  if ((num % 3 === 0) && (num != 0)) {
    return true;
  } else {
    return false;
  }
};

function buildArray(number) {
  // Input: this function takes a string of a number
  // Output: 2d array containing incremented numbers at first index of each element
  var number = parseInt(number);
  var finalArray = [];
  for (var i = 0; i <= number; i++) {
    finalArray.push([i]);
  }
  return finalArray;
}

function buildOutput(number, name) {
  // // Input: this function takes a string of a number
  // Output = 2d array containing iterant in 0th index and rule-based output in 1st index of each element
  var array = buildArray(number);
  for (var i = 0; i < array.length; i++) {
    var numberToEvaluate = array[i][0];
    if (checkDivisible(numberToEvaluate)) {
      if (name) {
        array[i].push("I'm sorry, " + name + ". I'm afraid I can't do that.");
      } else {
        array[i].push("I'm sorry, Dave. I'm afraid I can't do that.");
      }
    } else if (checkOne(numberToEvaluate)) {
      array[i].push("Boop!");
    } else if (checkZero(numberToEvaluate)) {
      array[i].push("Beep!")
    } else {
      array[i].push(array[i][0])
    }
  }
  return array;
};

function validateInput(inputString) {
  const regex = /[^1-9]+/g
  if (!inputString.match(regex)) {
    return true;
  } else {
    return false;
  }
}



// front-end




$(function() {

  var results = $("#results");
  var outputList = $("#output");
  var runApp = $("#go");
  var runAppReverse = $("#go-reverse");
  var inputBox = $("#input-box");
  var name = $("#name");
  var alertMessage = 'Please enter a single number greater than zero into the "Number to iterate" box. No spaces, letters or special charcters'
  results.hide();

  runApp.click(function() {
    if (validateInput(inputBox.val()) && (inputBox.val() > 0)) {

      if (outputList.is(":visible")) {
        results.slideUp();
        outputList.empty();
      }

      var inputText = inputBox.val();
      buildOutput(inputText, name.val()).forEach(function(each) {
        outputList.append("<li>" + each[1] + "</li>");
      });
      results.slideDown();
    } else {
      alert(alertMessage)
    }
  });

  runAppReverse.click(function() {

    if (validateInput(inputBox.val()) && (inputBox.val() > 0)) {

      if (outputList.is(":visible")) {
        results.slideUp();
        outputList.empty();
      }

      var inputText = inputBox.val();
      buildOutput(inputText, name.val()).forEach(function(each) {
        outputList.prepend("<li>" + each[1] + "</li>");
      });
      results.slideDown();
    } else {
      alert(alertMessage)
    }
  });



  inputBox.keyup(function(enter) {
    if (enter.which == 13) {
      runApp.click();
    }
  });

  name.keyup(function(enter) {
    if (enter.which == 13) {
      runApp.click();
    }
  });

});
