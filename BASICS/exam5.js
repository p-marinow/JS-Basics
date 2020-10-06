function energy (students, tasks, energyLevel) {


    students = Number(students);
    tasks = Number(tasks);
    energyLevel = Number(energyLevel);
    
    let counter = 0;

    if (students < 10) {
        console.log(`The students are too few!`);
        console.log(`Problems solved: ${counter}`);
    }
    while (students > 10 && energyLevel >= 0) {

        for (let i = 0; i<tasks; i++) {
            energyLevel +=2;
            students -= 1;
            counter++;
        }

        for (let j = 0; j < students; j++){
            energyLevel -= 6;
        }

        if (energyLevel <= 0) {
            console.log(`The trainer is too tired!`);
            console.log(`Questions asked: ${students*2}`);
        }

        if (students < 10) {
        console.log(`The students are too few!`);
        console.log(`Problems solved: ${counter}`);
        }


        students = students + Math.trunc(students / 10);

    }

}

energy(20, 5, 400);