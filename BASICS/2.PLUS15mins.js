function addTime (hours, minutes) {

    hours = Number(hours);
    minutes = Number(minutes);


    let totalTime = (hours * 60) + minutes + 15;

    let hoursOut = Math.floor(totalTime / 60);
    let minsOut = totalTime % 60;
    if (hoursOut >= 24){
        hoursOut -= 24;
    }

    if (minsOut < 10) {
        console.log(`${hoursOut}:0${minsOut}`);
    } else {
        console.log(`${hoursOut}:${minsOut}`);
    }

}

addTime(23, 59);