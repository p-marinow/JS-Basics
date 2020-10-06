function stipendii (salary, grade, minSalary) {

    salary = Number(salary);
    grade = Number(grade);
    minSalary = Number(minSalary);

    let socialScholarship = minSalary * 0.35;
    let scholarShip = grade * 25;


    if (salary > minSalary & grade < 5.50) {
        console.log(`You cannot get a scholarship!`);
    } else if (salary < minSalary & grade < 4.50) {
        console.log(`You cannot get a scholarship!`);
    } else if (salary < minSalary & grade >= 4.50 & grade <= 5.50) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (salary < minSalary & grade >= 4.50 & socialScholarship > scholarShip) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else if (salary < minSalary & grade >= 5.50 & scholarShip > socialScholarship) {
        console.log(`You get a scholarship for exellent results ${scholarShip} BGN`);
    } else if ( salary >= minSalary & grade >= 5.50){
        console.log(`You get a scholarship for exellent results ${scholarShip} BGN`);
    }




}


stipendii (300.00, 5.65, 420.00);