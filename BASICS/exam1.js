function submit (students, exersices) {

    students = Number(students);
    exersices = Number(exersices);

    submition = Math.ceil(exersices * 2.8);
    totalSubmition = submition * students;
    extraSubmition = students * Math.round(exersices / 3);
    let allSubmition = totalSubmition + extraSubmition;
    let totalStorage = 5 * Math.ceil(allSubmition / 10);

    console.log(`${totalStorage} KB needed`);
    console.log(`${allSubmition} submissions`);
    

}

submit ("25", "10");