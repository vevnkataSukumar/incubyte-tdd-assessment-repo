export function sum(stringWithNumbers) {
    if (stringWithNumbers === '') {
      return 0;
    }

    if (!isString(stringWithNumbers)) {
        return undefined;
    }

    const cleanString = clearString(stringWithNumbers);

    const numbers = cleanString.split(',')?.filter((num) => num && num < 1000);
    return numbers?.reduce((acc, num) => acc + parseInt(num), 0);
  }


  function isString(val) {
    return typeof val === 'string';
  }

  function clearString(stringWithNumbers) {
    // Match groups of consecutive digits
    const numberGroups = stringWithNumbers.match(/\d+/g);
    
    // Join the number groups with commas
    return numberGroups ? numberGroups.join(',') : '';
  }