function solve (input) {


    let counter = 1;
    let n = Number(input[0]);
    let flag = false;

    for ( let i = 1; i <= n; i++) {

        let outPut = "";

        for ( let j = 0; j < i; j++) {

            outPut += counter + " ";

            if (counter === n) {
                flag = true;
                break;
            }


            counter++;


        }
        console.log(outPut);

        if (flag) {
            break;
        }


    }

}

solve ([15]);
