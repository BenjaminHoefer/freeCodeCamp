function checkCashRegister(price, cash, cid) {

    let lengtCurr = 9;
    const units = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01]; 
    const currUnit = {"PENNY": 0.01, "NICKEL": 0.05, "DIME": 0.1, "QUARTER": 0.25, "DOLLAR": 1, "FIVE DOLLARS": 5, "TEN DOLLARS": 10, "TWENTY DOLLARS": 20, "ONE-HUNDRED DOLLARS": 100};
    const nameUnit = ["PENNY", "NICKEL", "DIME", "QUARTER", "DOLLAR", "FIVE DOLLARS", "TEN DOLLARS", "TWENTY DOLLARS", "ONE-HUNDRED DOLLARS"];
    const amountUnit = [];
    const accessCash = [];

    // Write the accessible cash for change in array
    for (let i = 0; i < lengtCurr; i++) {
        accessCash.push(Math.round(cid[i][1] / currUnit[nameUnit[i]]));
    }
    accessCash.reverse();

    // The amount of cash the customer receives
    let change = cash - price;

    // Check which kind of change is even possible
    let cashBack = units.filter(unit => change / unit >= 1);

    // Cut accessCash to the necessary length
    diffCurr = 9 - cashBack.length;
    accessCash.splice(0, diffCurr);

    // // Array which gives back the amount of coins and notes for change
    // let amountCoins = [];

    // for (let unit of cashBack) {
    //     if (change % unit === 0) {
    //         amountCoins.push(change / unit );
    //         return amountCoins;
    //     } else {
    //         amountCoins.push(Math.floor(change / unit ));
    //         change -= Math.floor(change / unit ) * unit;
    //         change = parseFloat(change.toFixed(2));
    //     }
    // }

    return accessCash;
}

debugger;
// console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
