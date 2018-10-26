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
  console.log("startingArray = ", array);
  for (var i = 0; i < array.length; i++) {
    var numberToEvaluate = array[i][0];
    if (checkDivisible(numberToEvaluate)) {
      array[i].push("I'm sorry, " + name + ". I'm afraid I can't do that.");
    } else if (checkOne(numberToEvaluate)) {
      array[i].push("Boop!");
    } else if (checkZero(numberToEvaluate)) {
      array[i].push("Beep!")
    } else {
      array[i].push(array[i][0])
    }
  }
  console.log("processedArray = ", array)
  return array;
};



// front-end

function validateInput(inputString) {
  const regex = /[^1-9]+/g
  if (!inputString.match(regex)) {
    return true;
  } else {
    return false;
  }
}

$(function() {

  var results = $("#results");
  var outputList = $("#output");
  var runApp = $("#go");
  var inputBox = $("#input-box");
  var name = $("#name");
  results.hide();

  runApp.click(function() {

    if (validateInput(inputBox.val())){

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
      alert('Please only enter numbers into the "Number to iterate" box.')
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
