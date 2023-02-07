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


  //problem-4
  /*
  findingBadData: This function takes an array of numbers as input and returns the count of negative numbers in the array.
  */
  function findingBadData(input_array) {
    if (Array.isArray(input_array)) {
        let badDataCount = 0;
        for (let i = 0; i < input_array.length; i++) {
            let data = input_array[i];
            if (data < 0) {
                badDataCount++;
            }
        }
        return badDataCount;
    } else {
        return "Please enter a valid array as input.";
    }
}

const inputArray = [1, -3, 4, -6, 7, -9];
const result = findingBadData(inputArray);
console.log(result);

  
  //problem-5
  /*
  gemsToDiamond: This function takes 3 numbers as input, multiplies each number by a different number (21, 32, 43) and adds them up. If the sum is greater than or equal to 2000, it subtracts 2000 from the sum and returns the result, otherwise it returns the sum.
  */
  function gemsToDiamond(input1, input2, input3) {
    if (typeof input1 !== "number" || typeof input2 !== "number" || typeof input3 !== "number") {
      return "Please, enter only numbers.";
    }
  
    const totalGems = input1 * 21 + input2 * 32 + input3 * 43;
    return totalGems >= 1000 * 2 ? totalGems - 2000 : totalGems;
  }

  const gemsToDiamondResult = gemsToDiamond(7, 67, 300)
console.log(gemsToDiamondResult);