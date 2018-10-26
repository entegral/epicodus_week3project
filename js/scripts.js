// Back-end
function checkZero(number){
  if (number == "0") {
    return true;
  } else {
    return false;
  }
};

function checkOne(number){
  if (number == "1") {
    return true;
  } else {
    return false;
  }
};

function checkDivisible(number){
  if (parseInt(number) % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

function buildArray(number){
  // Input: this function takes a string of a number
  // Output: 2d array containing incremented numbers at first index of each element
  var number = parseInt(number);
  var finalArray = [];
  for (var i = 0; i =< number; i++){
    finalArray.push([i]);
  }
  return finalArray;
}

function buildOutput(array){
  // Input = array containing arrays up to user-provided number
  // Output = array containing next number as first index, and placeholder text as second element (if applicable)
  var newIterant = [];



  return newIterant;
}









// Front-end



$(function() {



});
