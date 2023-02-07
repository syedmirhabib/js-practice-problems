//problem-1
/*
mindGame: This function takes a positive integer as input and performs multiple mathematical operations on it (multiplying by 3, adding 10, dividing by 2 and subtracting 5) and returns the final result.
*/

function mindGame(number) {
    // Check if the input is a positive integer
    if (Number.isInteger(number) && number > 0) {
      return (number * 3 + 10) / 2 - 5;
    } else {
      return "Please enter a positive integer.";
    }
  }
  
  // Get input from user
  const input = parseInt(prompt("Enter a positive integer:"));
  
  // Call the mindGame function with the user input
  const result = mindGame(input);
  
  // Output the result
  console.log(result);



  //problem-2
  /*
  evenOdd: This function takes a string as input and checks the length of the string. If it is even, it returns the string "even". If it is odd, it returns the string "odd".
  */



  //problem-3
  /*
  isLGSeven: This function takes a number as input, subtracts 7, and returns the result. If the result is greater than or equal to 7, it multiplies the input by 2 and returns the result.
  */



  //problem-4
  /*
  findingBadData: This function takes an array of numbers as input and returns the count of negative numbers in the array.
  */

  
  //problem-5
  /*
  gemsToDiamond: This function takes 3 numbers as input, multiplies each number by a different number (21, 32, 43) and adds them up. If the sum is greater than or equal to 2000, it subtracts 2000 from the sum and returns the result, otherwise it returns the sum.
  */