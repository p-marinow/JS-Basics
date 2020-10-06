function train (input) {


    let n = Number(input[0]);
    let index = 1;
    let name = input[index];

    let totalAvg = 0;
    let countOfProblems = 0;

    while ( name != "Finish") {
        countOfProblems++;
        let avgGrade = 0;

        for ( let i = 0; i < n; i++){
            let grade = Number(input[++index]);
            avgGrade += grade;
        }

        avgGrade /= n;
        totalAvg += avgGrade;
        console.log(`${name} - ${avgGrade.toFixed(2)}.`);
        
        name = input[++index];
    }

    console.log(`Student's final assessment is ${(totalAvg / countOfProblems).toFixed(2)}.`);

}

train ([2, "While-Loop", 6.00, 5.50, "For-Loop", 5.84, 5.66, "Finish"]);