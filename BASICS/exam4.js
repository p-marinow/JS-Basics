function lqlq (students, seasons){


    students = Number(students);
    seasons = Number(seasons);
    let firstExam = students;
    let secondExam = 0;
    let studentsContinue = 0;
    let totalStudents = 0;


    let counter = 1;


    for (let i = 1; i <= seasons; i++){

        firstExam = Math.ceil(students * 0.9);
        secondExam = Math.ceil(firstExam * 0.9);
        studentsContinue = Math.ceil(secondExam * 0.8);
        if (counter % 3 === 0) {
            totalStudents = studentsContinue + Math.ceil(studentsContinue * 0.15);
        } else {
            totalStudents = studentsContinue + Math.ceil(studentsContinue * 0.05);
        }
        students = totalStudents;
        counter++;
    }

    console.log(`Students: ${totalStudents}`);

}

lqlq("100", "6");