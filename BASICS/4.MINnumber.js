function minnumber (input){

    let number = Number(input[0]);
    let min_number = 100000000;
    count = 1;

    while (count <= number) {
        let current_number = Number(input[count]);
        if (current_number < min_number) {
            min_number = current_number;
        } 
        count += 1;     
    }

    console.log(min_number);

}

minnumber ([2, -1, -2]);
