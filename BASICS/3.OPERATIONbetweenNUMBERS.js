function operation (num1, num2, operand) {

    num1 = Number(num1);
    num2 = Number(num2);
    operand = String(operand);
    let total = 0.00;


    switch (operand) {
        case "+":

            total = num1 + num2;

            if (total % 2 == 0) {
                console.log(`${num1} ${operand} ${num2} = ${total} - even`);
            } else {
                console.log(`${num1} ${operand} ${num2} = ${total} - odd`);
            }

        break;


        case "-":

            total = num1 - num2;

            if (total % 2 == 0) {
                console.log(`${num1} ${operand} ${num2} = ${total} - even`);
            } else {
                console.log(`${num1} ${operand} ${num2} = ${total} - odd`);
            }

        break;

        case "*":

            total = num1 * num2;

            if (total % 2 == 0) {
                console.log(`${num1} ${operand} ${num2} = ${total} - even`);
            } else {
                console.log(`${num1} ${operand} ${num2} = ${total} - odd`);
            }

        break;

        case "/":

            total = num1 / num2;

            if (num2 == 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
            console.log(`${num1} ${operand} ${num2} = ${(total).toFixed(2)}`);
            }
        break;


        case "%":

            total = num1 % num2;

            if (num2 == 0) {

                console.log(`Cannot divide ${num1} by zero`);
            } else {
            console.log(`${num1} ${operand} ${num2} = ${total}`);
            }
        break;
    }

}

operation (10, 3, "+");