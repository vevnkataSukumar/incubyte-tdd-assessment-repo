export function sum(stringWithNumbers) {
    if (stringWithNumbers === '') {
      return 0;
    }

    if (!isString(stringWithNumbers)) {
        return undefined;
    }

    // const clearString = stringWithNumbers.replace(/[^0-9,]/g, '');

    const numbers = stringWithNumbers.split(',')?.filter((num) => num && num < 1000);
    return numbers?.reduce((acc, num) => acc + parseInt(num), 0);
  }


  function isString(val) {
    return typeof val === 'string';
  }