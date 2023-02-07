//problem-1
/*
mindGame: This function takes a positive integer as input and performs multiple mathematical operations on it (multiplying by 3, adding 10, dividing by 2 and subtracting 5) and returns the final result.
*/

function mindGame(number) {
    // Check if the input is a positive integer
    if (Number.isInteger(number) && number > 0) {
      return (number * 3 + 10) / 2 - 5;
    } else {
      return "Please, enter a positive integer.";
    }
  }


  //problem-2
  /*
  evenOdd: This function takes a string as input and checks the length of the string. If it is even, it returns the string "even". If it is odd, it returns the string "odd".
  */
  function evenOdd(string) {
    if (typeof string !== "string") {
      return "Please, enter a string.";
    }
  
    return string.length % 2 === 0 ? "even" : "odd";
  }


  //problem-3
  /*
  isLGSeven: This function takes a number as input, subtracts 7, and returns the result. If the result is greater than or equal to 7, it multiplies the input by 2 and returns the result.
  */
  function isLGSeven(number) {
    if (typeof number !== "number") {
      return "Please, enter a number.";
    }
  
    return number - 7 < 7 ? number - 7 : number * 2;
  }
