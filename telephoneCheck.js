function telephoneCheck(str) {

    if (!/[^-() \d]/g.test(str)) {
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
            case (count === 10):
                if (digArr[0].length === 2) {
                    return false;
                }
        }
        if(/\(/g.test(str) || /\)/g.test(str)) {
            if (/\(\d{3}\)/g.test(str))
                return true;
                else {
                    return false;
                }
        } else {
            return true;
            }
    }
    return false;
}

telephoneCheck("55 55-55-555-5");
