function devide (input) {



    let n = Number(input[0]);
    let p1Devide = 0;
    let p2Devide = 0;
    let p3Devide = 0;



    for (let i = 1; i < input.length; i++) {
        let number = Number(input[i]);

        if (number % 2 == 0) {
            p1Devide++;
        } if (number % 3 == 0) {
            p2Devide++;
        } if (number % 4 == 0) {
            p3Devide++;
        }

    }

    let p1 = p1Devide / n * 100;
    let p2 = p2Devide / n * 100;
    let p3 = p3Devide / n * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);


}

devide ([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);
