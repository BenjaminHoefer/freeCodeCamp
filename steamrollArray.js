function steamrollArray(arr) {

    while (arr.some(item => Array.isArray(item))) {
        arr = [].concat(...arr);
    }
    return arr;
}

  
  steamrollArray([1, [2], [3, [[4]]]]);