function income (type, rows, coloums) {

    rows = Number(rows);
    coloums = Number(coloums);
    let income = 0;

    if (type == "Premiere") {
        income = rows * coloums * 12.0;
    } else if ( type == "Normal") {
        income = rows * coloums * 7.5;
    } else if ( type == "Discount") {
        income = rows * coloums * 5.0;
    }

    console.log(`${income.toFixed(2)} leva`);

}

income ("Premiere", 10, 12);