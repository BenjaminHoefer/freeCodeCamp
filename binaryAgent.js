function binaryAgent(str) {

    const binArr = str.split(" ");
    const codeArr = [];
    const charArr = [];
    let letter = "";
 
 
     for (let element of binArr) {
         let counter = 0;
         if (element[0] === "1") {
             counter += 128;
         }
         if (element[1] === "1") {
             counter += 64;
         }
         if (element[2] === "1") {
             counter += 32;
         }
         if (element[3] === "1") {
             counter += 16;
         }
         if (element[4] === "1") {
             counter += 8;
         }
         if (element[5] === "1") {
             counter += 4;
         } 
         if (element[6] === "1") {
             counter += 2;
         }
         if (element[7] === "1") {
             counter += 1;
         }
         codeArr.push(counter);
     }
 
     for (let charcode of codeArr) {
         letter += String.fromCharCode(charcode);
     } 
 
     return letter;
 }
 
  binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");