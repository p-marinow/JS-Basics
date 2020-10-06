function tournament (input) {
    let index = 0;
    let kozunaksCount = Number(input[index++]);
    let bakerWithMostPoints = "";
    let topBakerPoints = 0;

    while (kozunaksCount > 0) {

        let currentBakerName = input[index++];
        let currentBakerPoints = 0;
        let inputLine = input[index++];
 

        while(inputLine != "STOP") {
            currentBakerPoints += Number(inputLine);
            inputLine = input[index++];
        }

        console.log(`${currentBakerName} has ${currentBakerPoints} points.`);

        if ( currentBakerPoints > topBakerPoints) {
            topBakerPoints = currentBakerPoints;
            bakerWithMostPoints = currentBakerName;
            console.log(`${currentBakerName} is the new number 1!`);
        }


        kozunaksCount--;
    }

    console.log(`${bakerWithMostPoints} won competition with ${topBakerPoints} points!`);



}


tournament([3, "Chef Manhcev", 10, 10, 10, 10, "STOP", "Natalie", 8, 2, 9, "STOP", "George", 9, 2 , 4, 2, "STOP"]);