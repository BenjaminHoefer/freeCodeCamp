function palindrome(str) {

    const paliArr = str.toLowerCase().split(/[_]|\W*\s*/g);

    return paliArr;
}

debugger;
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("0_0 (: /-\ :) 0-0"));