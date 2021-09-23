const hexStrToDec = (str) => {
    let sum = 0;
    let exp = str.length - 1;
    const letters = {"A":10,"B":11,"C":12,"D":13,"E":14,"F":15};

    for(let i = 0; i < str.length; i++){
        let num;
        if(isNaN(str[i])){
            num = letters[str[i]];
        }
        else{
            num = parseInt(str[i]);
        }

        sum += num * 16**exp;
        exp--;
    }

    return sum;
}

// console.log(hexStrToDec("1D2"));
// console.log(hexStrToDec("2C1"));
// console.log(hexStrToDec("3B5"));
// console.log(hexStrToDec("FFF"));


const decToHexStr = (val) => {
    var output = "";
    var hex = {1:1, 2:2, 3:3, 4:4, 5:5, 6:6, 7:7, 8:8, 9:9, 10: 'A', 11: 'B', 12:'C', 13:'D', 14: 'E', 15: 'F'};
    while (val){
        
        output = hex[val % 16] + output;
        val = Math.floor(val / 16);
    }
    return output;
}
