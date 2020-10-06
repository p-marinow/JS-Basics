function speed (input) {

    input = Number(input);


    if ( input <= 10 ) {
        console.log("slow");
    } else if ( input <= 50) {
        console.log("average");
    } else if ( input <= 150 ) {
        console.log("fast");
    } else if ( input > 1000) {
        console.log("extremely fast");
    } else {
        console.log("ultra fast");
    }

}

speed(150);