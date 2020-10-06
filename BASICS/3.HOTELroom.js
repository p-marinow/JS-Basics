function hotelroom (month, days) {

    month = String(month);
    days = Number(days);

    let roomPrice = 0;
    let studio = 0;
    let studioTotal = 0;
    let apartment = 0;
    let apartmentTotal = 0;


    switch (month) {
        case "May":

        studio = 50;
        apartment = 65;
        studioTotal = studio * days;
        apartmentTotal = apartment * days;

        if (days > 7 && days < 14) {
            studioTotal = studioTotal * 0.95;
        } else if (days > 14) {
            apartmentTotal = apartmentTotal * 0.9;
            studioTotal = studioTotal * 0.7;
        }

        console.log(`Apartment: ${(apartmentTotal).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioTotal).toFixed(2)} lv.`);

        break;

    }


    switch (month) {
        case "June":

        studio = 75.20;
        apartment = 68.70;
        studioTotal = studio * days;
        apartmentTotal = apartment * days;

        if (days > 14) {
            apartmentTotal = apartmentTotal * 0.9;
            studioTotal = studioTotal * 0.8;
        }

        console.log(`Apartment: ${(apartmentTotal).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioTotal).toFixed(2)} lv.`);

        break;
        
    }


    switch (month) {
        case "July":

        studio = 76;
        apartment = 77;
        studioTotal = studio * days;
        apartmentTotal = apartment * days;

        if (days > 14) {
            apartmentTotal = apartmentTotal * 0.9;
        }

        console.log(`Apartment: ${(apartmentTotal).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioTotal).toFixed(2)} lv.`);
        
        break;
        
        
    }


    switch (month) {
        case "August":

        studio = 76;
        apartment = 77;
        studioTotal = studio * days;
        apartmentTotal = apartment * days;

        if (days > 14) {
            apartmentTotal = apartmentTotal * 0.9;
        }

        console.log(`Apartment: ${(apartmentTotal).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioTotal).toFixed(2)} lv.`);
        
        break;
        
        
    }


    

    switch (month) {
        case "September":

        studio = 75.20;
        apartment = 68.70;
        studioTotal = studio * days;
        apartmentTotal = apartment * days;

        if (days > 14) {
            apartmentTotal = apartmentTotal * 0.9;
            studioTotal = studioTotal * 0.8;
        }

        console.log(`Apartment: ${(apartmentTotal).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioTotal).toFixed(2)} lv.`);
        
        break;
        
        
    }


    switch (month) {
        case "October":

        studio = 50;
        apartment = 65;
        studioTotal = studio * days;
        apartmentTotal = apartment * days;

        if (days > 7 && days < 14) {
            studioTotal = studioTotal * 0.95;
        } else if (days > 14) {
            apartmentTotal = apartmentTotal * 0.9;
            studioTotal = studioTotal * 0.7;
        }

        console.log(`Apartment: ${(apartmentTotal).toFixed(2)} lv.`);
        console.log(`Studio: ${(studioTotal).toFixed(2)} lv.`);
        
        break;
        
        
    }
}

hotelroom ("August", 20);