function racing (fuel, fuelExpenses, laps) {

    fuel = Number(fuel);
    fuelExpenses = Number(fuelExpenses);
    laps = Number(laps);

    let round = 0;

    for (let i = 1; i <= laps; i++) {      

        fuel -= fuelExpenses;
        

        if (i === 1) {
            fuelExpenses -= 0.1;
        }

        if (fuel <= 0) {
            break;
        }

        round++;

    }


    if (fuel <= 0) {
        console.log(`You are out of fuel in round ${round}!`);
    } else {
        console.log(`Congrats! You won the race!`);
    }

}

racing(50, 4.3, 30);