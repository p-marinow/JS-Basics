function multiplication (input) {

    input = Number(input);
    let total = 0.0;
    let circle = 0;

    for (let i = 1; i <= 10; i++) {
        cicle = circle++;
        total = circle * input;
        console.log(`${i} * ${input} = ${total}`);
    }
}


multiplication(5);