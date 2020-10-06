function flowers (typeFlower, numberFlower, buget) {

    typeFlower = String(typeFlower);
    numberFlower = Number(numberFlower);
    buget = Number(buget);

    let roses = 5.00;
    let dahlias = 3.80;
    let tulips = 2.80;
    let narcissus = 3.00;
    let gladiolus = 2.50;
    let cash = 0.00;


    switch (typeFlower){
        case "Roses":

            if (numberFlower > 80){
                cash = (numberFlower * roses) * 0.9;
            } else {
                cash = numberFlower * roses;
            }

        break;

        case "Dahlias":

            if (numberFlower > 90){
                cash = (numberFlower * dahlias) * 0.85;
            } else {
                cash = numberFlower * dahlias;
            }

        break;

        case "Tulips":

            if (numberFlower > 80){
                cash = (numberFlower * tulips) * 0.85;
            } else {
                cash = numberFlower * tulips;
            }

        break;

        case "Narcissus":

            if (numberFlower < 120){
                cash = (numberFlower * narcissus) * 1.15;
            } else if (numberFlower >= 120) {
                cash = numberFlower * narcissus;
            }

        break;

        case "Gladiolus":

            if (numberFlower < 80){
                cash = (numberFlower * gladiolus) * 1.20;
            } else if (numberFlower >= 80) {
                cash = numberFlower * gladiolus;
            }

        break;
            
    }

    if (buget >= cash) {
        console.log(`Hey, you have a great garden with ${numberFlower} ${typeFlower} and ${(buget - cash).toFixed(2)} leva left.`);
    } else if (buget < cash) {
        console.log(`Not enough money, you need ${(cash - buget).toFixed(2)} leva more.`);
    }

}

flowers("Tulips", 88, 260);