function checkCashRegister(price, cash, cid) {

    const units = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]; 
    const currUnit = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "DOLLAR": 1, "FIVE DOLLARS": 5, "TEN DOLLARS": 10, "TWENTY DOLLARS": 20, "ONE-HUNDRED DOLLARS": 100};
    const nameUnit = ["PENNY", "NICKEL", "DIME", "QUARTER", "DOLLAR", "FIVE DOLLARS", "TEN DOLLARS", "TWENTY DOLLARS", "ONE-HUNDRED DOLLARS"];

    // Write the accessible cash for change in array
    const accessCash = [];

    for (let i = 0; i < units.length; i++) {
        accessCash.push(Math.round(cid[i][1] / currUnit[nameUnit[i]]));
    }
    accessCash.reverse();

    // The amount of cash the customer receives
    let change = cash - price;

    // Check which kind of change is even possible
    const cashBack = [];

    for (let unit of units) {
        if (change / unit >= 1) {
            cashBack.push(unit);
        } else {
            cashBack.push(0);
        }
    }

    // Array which gives back the amount of coins and notes for change
    const amountCoins = [];
    let checkVar = 0;

    for (let i = 0; i < cashBack.length; i++) {
        if (cashBack[i] === 0) {
            amountCoins.push(cashBack[i]);
        } else if (change % cashBack[i] === 0) {
            if (Math.floor(change / cashBack[i]) >= accessCash[i]) {
                amountCoins.push(accessCash[i])
                change -= accessCash[i] * cashBack[i];
                change = parseFloat(change.toFixed(2));
            } else {
                amountCoins.push(Math.floor(change / cashBack[i]));
                change -= Math.floor(change / cashBack[i] ) * cashBack[i];
                change = parseFloat(change.toFixed(2));
                checkVar = 1;
                }
        } else {
            if (Math.floor(change / cashBack[i]) >= accessCash[i]) {
                amountCoins.push(accessCash[i])
                change -= accessCash[i] * cashBack[i];
                change = parseFloat(change.toFixed(2));

            } else {
                amountCoins.push(Math.floor(change / cashBack[i]));
                change -= Math.floor(change / cashBack[i] ) * cashBack[i];
                change = parseFloat(change.toFixed(2));
                checkVar = 1;
            }
        }
    }

    // Determine the status of the cash checkCashRegister
    let status = "";

    if (change === 0 && checkVar === 1) {
        status = "OPEN";
    } else if (change === 0 && checkVar === 0) {
        status = "CLOSED";
    } else {
        status = "INSUFFICIENT_FUNDS"
    }

    // Create the desired ouput format
    let output = [];
    let partialOutput = [];

    for (let index = 0; index < amountCoins.length; index++) {
        if (status === "OPEN" || status === "CLOSED") {
            if (amountCoins[index] === 0 && status === "OPEN") {
                continue;
            } else {
                switch (index) {
                    case 0:
                        partialOutput.push("ONE HUNDRED");
                        partialOutput.push(amountCoins[index] * 100);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 1:
                        partialOutput.push("TWENTY");
                        partialOutput.push(amountCoins[index] * 20);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 2:
                        partialOutput.push("TEN");
                        partialOutput.push(amountCoins[index] * 10);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 3:
                        partialOutput.push("FIVE");
                        partialOutput.push(amountCoins[index] * 5);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 4:
                        partialOutput.push("ONE");
                        partialOutput.push(amountCoins[index] * 1);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 5:
                        partialOutput.push("QUARTER");
                        partialOutput.push(amountCoins[index] * 0.25);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 6:
                        partialOutput.push("DIME");
                        partialOutput.push(amountCoins[index] * 0.1);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 7:
                        partialOutput.push("NICKEL");
                        partialOutput.push(amountCoins[index] * 0.05);
                        output.push(partialOutput);
                        partialOutput = [];
                        break;
                    case 8:
                        partialOutput.push("PENNY");
                        partialOutput.push(amountCoins[index] * 0.01);
                        output.push(partialOutput);
                        partialOutput = [];
                }   
            }
        }
    }

    if (status === "CLOSED") {
        output.reverse();
    }
    
    let finalChange = {status: status, change: output};

    return finalChange;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));