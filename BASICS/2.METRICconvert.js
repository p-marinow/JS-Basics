function converter (distance, input, output) {

    distance = Number(distance);
    let result = 0;

    if (input == "mm") {
        result = distance / 1000;
    } else if (input == "cm") {
        result = distance / 100;
    } else if (input == "m"){
        result = distance;
    }


    if (output == "m") {
        distance = result;
    } else if (output == "cm") {
        distance = result * 100;
    } else if (output == "mm") {
        distance = result * 1000;
    }

    console.log(distance.toFixed(3));
}

converter("150", "m", "cm");