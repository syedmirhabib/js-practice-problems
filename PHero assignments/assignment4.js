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
  