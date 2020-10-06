function sumSecs (first, second, third) {

    first = Number(first);
    second = Number(second);
    third = Number(third);
    
    let totalTime = first + second + third;
    let mins = Math.floor(totalTime / 60);
    let secs = totalTime % 60;

    if (secs < 10) {
        console.log(`${mins}:0${secs}`);
    } else {
        console.log(`${mins}:${secs}`);
    }
}

sumSecs(35, 45, 44);