export function sum(stringWithNumbers) {
    if (stringWithNumbers === '') {
      return 0;
    }

    if (!isString(stringWithNumbers)) {
        return undefined;
    }

    const numbers = stringWithNumbers.split(',');
    return numbers?.reduce((acc, num) => acc + parseInt(num), 0);
  }


  function isString(val) {
    return typeof val === 'string';
  }