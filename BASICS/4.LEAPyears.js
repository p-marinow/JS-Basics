function leap (leapYear, randomYear) {


    leapYear = Number(leapYear);
    randomYear = Number(randomYear);

    for ( leapYear = leapYear; leapYear <= randomYear; leapYear++) {
        
        if (leapYear % 4 == 0) {
            console.log(`${leapYear}`);
        }
        
    }

}

leap (1584, 1597);