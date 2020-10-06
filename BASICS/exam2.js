function examPoints (exam, score, course) {

    exam = Number(exam);
    score = Number(score);
    course = String(course);
    let coef = 0;


    switch (course) {
        case "Basics":

            if (exam === 1) {
                coef = 8;
                score = score * coef / 100;
                score = score * 0.8;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 2) {
                coef = 9;
                score = score * coef / 100;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 3) {
                coef = 9;
                score = score * coef / 100;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 4) {
                coef = 10;
                score = score * coef / 100;
                console.log(`Total points: ${score.toFixed(2)}`);
            }

        break;
        case "Fundamentals":

            if (exam === 1) {
                coef = 11;
                score = score * coef / 100;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 2) {
                coef = 11;
                score = score * coef / 100;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 3) {
                coef = 12;
                score = score * coef / 100;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 4) {
                coef = 13;
                score = score * coef / 100;
                console.log(`Total points: ${score.toFixed(2)}`);
            }

        break;

        case "Advanced":

            if (exam === 1) {
                coef = 14;
                score = score * coef / 100;
                score = score * 1.2;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 2) {
                coef = 14;
                score = score * coef / 100;
                score = score * 1.2;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 3) {
                coef = 15;
                score = score * coef / 100;
                score = score * 1.2;
                console.log(`Total points: ${score.toFixed(2)}`);
            }
            if (exam === 4) {
                coef = 16;
                score = score * coef / 100;
                score = score * 1.2;
                console.log(`Total points: ${score.toFixed(2)}`);
            }

        break;
    }

}


examPoints(1, 100, "Basics");