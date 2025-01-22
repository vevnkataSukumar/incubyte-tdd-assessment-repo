export function sum(stringWithNumbers) {
    if (stringWithNumbers === '') {
      return 0;
    }

    if (!isString(stringWithNumbers)) {
        return undefined;
    }

    const cleanString = clearString(stringWithNumbers);

    const numberString = cleanString.split(',');
    const numbersArray = getNumbersArray(numberString);

    if (doesNumbersArrayHaveNegativeNumber(numbersArray)) {
        return 'negatives not allowed';
    }

    const sumResult = sumNumbers(numbersArray);
    return sumResult;
  }

  function isString(val) {
    return typeof val === 'string';
  }

  function clearString(stringWithNumbers) {
    // Match groups of consecutive digits
    const numberGroups = stringWithNumbers.match(/-?\d+/g);
    
    // Join the number groups with commas
    return numberGroups ? numberGroups.join(',') : '';
  }

  function getNumbersArray(numString) {
    return  numString?.filter((num) => num && num < 1000);
  }

  function sumNumbers(numArray) {
    return numArray?.reduce((acc, num) => acc + parseInt(num), 0);
  }

  function doesNumbersArrayHaveNegativeNumber(numbersArray) {
    // Check if any number in the array is negative
    return numbersArray.some(num => num < 0);
  }