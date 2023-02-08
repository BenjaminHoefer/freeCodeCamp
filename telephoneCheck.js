function telephoneCheck(str) {

    if (!/[^-() \d]/g.test(str)) {
        if (!(/\(/g.test(str) && /\)/g.test(str))) {
            return false;
        }
        if (str[str.length - 1] === "(" || str[str.length - 1] === ")") {
            return false;
        }
        const digArr = str.split(/\D/g);
        let count = 0;
        const countryCode = 1;

        for (let num of digArr) {
            count += num.length;
        }

        switch (true) {
            case (count > 11):
                return false;
            case (count < 10):
                return false;
            case (count === 11):
                if (parseInt(str[0]) !== countryCode) {
                    return false;
                }
        }
        return true;
    }
    return false;
}
debugger;
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));