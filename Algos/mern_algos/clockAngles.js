//clock angles!!!!

//given a number of minutes past midnight, determine
//the angle between the hour and minute hands at that point in time
//keep in mind that on an analog clock, the hour hand is
//not perfectly aligned with the number hour
//e.g. at 4:45, the hour hand is 3/4 the way between 4 and 5

const clockAngles = (minutes) => {
    var minHand = ((minutes % 60) / 60) * 360;
    var hourHand = ((minutes % 720) * 0.5);
    var output = minHand - hourHand;
    if(output < 0) {
        output += 360;
    }
    if (output >= 180){
        output = 360 - output;
    }
    return output;
}

console.log(clockAngles(360));
console.log(clockAngles(180));
console.log(clockAngles(210));
console.log(clockAngles(588));
console.log(clockAngles(980));
console.log(clockAngles(361));