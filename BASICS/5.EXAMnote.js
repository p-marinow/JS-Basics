function note (input) {

    let poorTarget = Number(input[0]);

    let poorCount = 0;
    let index = 1;
    let isTargetHitted = false;
    let problemName = input[index];
    let gradeSum = 0;
    let totalGrades = 0;
    let lastProblem = "";

    while (problemName !== "Enough") {

        index++;
        let grade = Number(input[index]);
        gradeSum += grade;

        if ( grade <= 4) {
            poorCount++;
        }

        if (poorCount === poorTarget) {
            isTargetHitted = true;
            break;
        }

        lastProblem = problemName;
        totalGrades++;
        index++;
        problemName = input[index];

    }

    if (isTargetHitted) {
        console.log(`You need a break, ${poorCount} poor grades.`);
    } else {
        let avrGrade = gradeSum / totalGrades;
        console.log(`Average score: ${avrGrade.toFixed(2)}`);
        console.log(`Number of problems: ${totalGrades}`);
        console.log(`Last problem: ${lastProblem}`);
    }

}
note ([3, "Money", 6, "Story", 4, "Spring Time", 5, "Bus", 6, "Enough"]);
