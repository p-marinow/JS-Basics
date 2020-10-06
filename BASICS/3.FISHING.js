function fishing (buget, season, fishers) {

    buget = Number(buget);
    season = String(season);
    fishers = Number(fishers);
    let boatTax = 0.00;




    switch (season) {

        case "Spring":

        boatTax = 3000;

        if (fishers % 2 == 0) {
            boatTax = boatTax * 0.95;
        }

        if (fishers <=6){
            boatTax = boatTax * 0.9;
        } else if ( fishers >= 7 && fishers <= 11) {
            boatTax = boatTax * 0.85;
        } else if ( fishers >= 12) {
            boatTax = boatTax * 0.75;
        }

        break;


        case "Summer":

            boatTax = 4200;
    
            if (fishers % 2 == 0) {
                boatTax = boatTax * 0.95;
            }
    
            if (fishers <=6){
                boatTax = boatTax * 0.9;
            } else if ( fishers >= 7 && fishers <= 11) {
                boatTax = boatTax * 0.85;
            } else if ( fishers >= 12) {
                boatTax = boatTax * 0.75;
            }
    
        break;


        case "Autumn":

                boatTax = 4200;
        
                if (fishers <=6){
                    boatTax = boatTax * 0.9;
                } else if ( fishers >= 7 && fishers <= 11) {
                    boatTax = boatTax * 0.85;
                } else if ( fishers >= 12) {
                    boatTax = boatTax * 0.75;
                }
        
         break;

                


        case "Winter":

                    boatTax = 2600;
            
                    if (fishers % 2 == 0) {
                        boatTax = boatTax * 0.95;
                    }
            
                    if (fishers <=6){
                        boatTax = boatTax * 0.9;
                    } else if ( fishers >= 7 && fishers <= 11) {
                        boatTax = boatTax * 0.85;
                    } else if ( fishers >= 12) {
                        boatTax = boatTax * 0.75;
                    }
            
         break;
        

    }


    if (boatTax <= buget) {
        console.log(`Yes! You have ${((buget - boatTax).toFixed(2))} leva left.`);
    } else {
        console.log(`Not enough money! You need ${((boatTax - buget).toFixed(2))} leva.`);
    }


}


fishing (3000, "Summer", 11);