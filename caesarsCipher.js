function rot13(str) {

    // Variables and constants for the cipher
    const abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const strArr = str.split("");
    let cipherStr = "";
    let index;

    // Get the index of the letters of the string from the abc
    for (let letter of strArr) {
        if (abc.includes(letter)) {
            if (abc[abc.indexOf(letter) + 13] !== undefined) {
                index = abc.indexOf(letter) + 13;
                cipherStr += abc[index];
            }   else {
                    index = Math.abs(26 - (abc.indexOf(letter) + 13));
                    cipherStr += abc[index];
            }
        } else {
            cipherStr += letter;
        }
        
    }
    return cipherStr;
}

rot13("SERR PBQR PNZC");