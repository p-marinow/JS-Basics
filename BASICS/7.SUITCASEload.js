function suitcaseLoad(input){
    let index = 0;
    let planeCapacity = Number(input[index++]);
    let successfullyLoaded = 0;
    let isSuccessful = true;

    let inputLine = input[index++];

    while (inputLine !== "End") {
        let currentSuitcase = Number(inputLine);
        
        if ((successfullyLoaded + 1) % 3 === 0) {
            currentSuitcase += currentSuitcase * 0.1;
        }

        planeCapacity -= currentSuitcase;

        if (planeCapacity < 0) {
            isSuccessful = false;
            break;
        } 

        successfullyLoaded++;
        inputLine = input[index++];
    }


    if (planeCapacity >=0) {
        console.log(`Congratulations! All suitcases are loaded!`);
    } else {
        console.log(`No more space!`);
    }

    console.log(`Statistic: ${successfullyLoaded} suitcases loaded.`);

}


suitcaseLoad([550, 100, 252, 72, "End"]);