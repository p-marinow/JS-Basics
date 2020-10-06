function swimrecord (worldRecord, distance, swimmerSkill) {

        worldRecord = Number(worldRecord);
        distance = Number(distance);
        swimmerSkill = Number(swimmerSkill);

        let swimTime = distance * swimmerSkill;
        let decreaceSpeed = (distance / 15).toFixed(0) * 12.5;
        let totalTime = swimTime + decreaceSpeed;


        if ( worldRecord < totalTime) {
            console.log(`No, he failed! He was ${(totalTime - worldRecord).toFixed(2)} seconds slower.`);
        } else {
            console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
        }

}

swimrecord (10464, 1500, 20);