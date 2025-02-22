export function sum(stringWithNumbers) {
    // Check if the input is a string
    if (!isString(stringWithNumbers)) {
        return undefined;
    }

    // Check if the string is empty
    if (stringWithNumbers === '') {
      return 0;
    }

    // Remove all characters that are not numbers, commas and -
    const cleanString = clearString(stringWithNumbers);

    // Split the string into an array of numbers
    const numberString = cleanString.split(',');

    // Filter out numbers greater than 1000
    const numbersArray = getNumbersArray(numberString);

    // Check if the array has any negative numbers
    if (doesNumbersArrayHaveNegativeNumber(numbersArray)) {
        return 'negatives not allowed';
    }

    // Sum the numbers in the array
    const sumResult = sumNumbers(numbersArray);
    return sumResult;
  }

  // function for checking if the input is a string
  function isString(val) {
    return typeof val === 'string';
  }

  // function for removing all characters that are not numbers, commas and -
  function clearString(stringWithNumbers) {
    // Match groups of consecutive digits
    const numberGroups = stringWithNumbers.match(/-?\d+/g);
    
    // Join the number groups with commas
    return numberGroups ? numberGroups.join(',') : '';
  }

  // fuction for converting string to array of numbers aqnd filtering out the numbers which are greater than 1000
  function getNumbersArray(numString) {
    return  numString?.filter((num) => num && num < 1000);
  }

  // function for checking if the array has any negative numbers
  function doesNumbersArrayHaveNegativeNumber(numbersArray) {
    // Check if any number in the array is negative
    return numbersArray.some(num => num < 0);
  }

  // function for summing the numbers in the array
  function sumNumbers(numArray) {
    return numArray?.reduce((acc, num) => acc + parseInt(num), 0);
  }