function vacantion (buget, season) {

    buget = Number(buget);
    season = String(season);
    let destination = "";
    let sleeps = "";

    switch (season){

        case "winter":

            if (buget <= 100) {
                destination = "Bulgaria";
                sleeps = "Hotel";
                cost = buget * 0.7;
            } else if (buget <= 1000 && buget > 100){
                destination = "Balkans";
                sleeps = "Hotel";
                cost = buget * 0.8;
            } else if (buget > 1000) {
                destination = "Europe";
                sleeps = "Hotel";
                cost = buget * 0.9;
            }

        break;


        case "summer":

            if (buget <=100) {
                destination = "Bulgaria";
                sleeps = "Camp";
                cost = buget * 0.3;
            }
            if (buget <= 1000 && buget > 100) {
                destination = "Balkans";
                sleeps = "Camp";
                cost = buget * 0.4;
            }
            if (buget > 1000) {
                destination = "Europe";
                sleeps = "Hotel";
                cost = buget * 0.9;
            }

        break;

    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${sleeps} - ${(cost).toFixed(2)}`);

}

vacantion (50, "summer");