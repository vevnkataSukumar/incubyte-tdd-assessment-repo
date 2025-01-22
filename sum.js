export function sum(stringWithNumbers) {
    if (stringWithNumbers === '') {
      return 0;
    }

    if (!isString(stringWithNumbers)) {
        return undefined;
    }
    return 1;
  }


  function isString(val) {
    return typeof val === 'string';
  }