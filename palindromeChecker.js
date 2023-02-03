function palindrome(str) {

    const paliArr = str.toLowerCase().split(/[_]|\W*\s*/g);

    return paliArr.join("") === paliArr.reverse().join("");
}

console.log(palindrome("A man, a plan, a canal. Panama"));
