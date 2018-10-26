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
  for (var i = 0; i < number; i++){
    finalArray.push([i]);
  }
  console.log(finalArray);
  return finalArray;
}

function iterateThis(array){
  // Input = array containing previous number at first index
  // Output = array containing next number as first index, and placeholder text as second element (if applicable)
  var newIterant = [];



  return newIterant;
}









// Front-end



$(function() {



});
