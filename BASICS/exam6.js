function certificate (input) {


    let index = 0;
    let name = input[index++];
    let currentPoints = 0;



    while ( input[index] !== ""){
        let inputLine = input[index];
        currentPoints += Number(inputLine);   
        console.log(currentPoints);


        while (input[index] !== "Midnight"){

        }


        if (input[index] < 0) {
            console.log(`${name} was cheating!`);
            break;
        } 


        index++;
    }


}

certificate(["George", 100, 100, 100, 100, 40, 0, "John", 10, -1, "Peter", 100, 100, 100, 100, 100, 70, "Midnight"]);
