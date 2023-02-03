function convertToRoman(num) {

    let quot;
    let roman = "";
    const romanArabic = [{"M": 1000}, 
                        {"CM": 900}, 
                        {"D": 500}, 
                        {"CD": 400}, 
                        {"C": 100}, 
                        {"XC": 90},
                        {"L": 50}, 
                        {"XL": 40}, 
                        {"X": 10}, 
                        {"IX": 9},
                        {"V": 5},
                        {"IV": 4},
                        {"I": 1}];

    for (let element of romanArabic) {
        if (num / Object.values(element) >= 1) {
            quot = Math.floor(num / Object.values(element));
            num = num - quot * Object.values(element);
            for (let i = 0; i < quot; i++) {
                roman += Object.keys(element);
            }
        }    
    }

    return roman;
}

debugger;
console.log(convertToRoman(3999));