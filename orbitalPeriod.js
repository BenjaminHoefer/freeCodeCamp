function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const calcArr = [];


    for (let element of arr) {
        let orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt((element.avgAlt + earthRadius) ** 3 / GM));
        calcArr.push({name: element.name, orbitalPeriod: orbitalPeriod});
    }

    return calcArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);