function volley (year, p, h) {

    year = String(year);
    p = Number(p);
    h = Number(h);

    let yearWeeks = 48;
    let sofiaWeeks = yearWeeks - h;
    let sofiaPlays = sofiaWeeks * 3.0/4;
    let pPlays = p * 2.0/3;

    let totalPlays = sofiaPlays + pPlays + h;


    switch (year) {
        case "leap":

        totalPlays = totalPlays * 1.15;
        console.log(Math.trunc(totalPlays));
        break;
    
        case "normal":
        
        totalPlays = totalPlays;
        console.log(Math.trunc(totalPlays));
        break;
    }

}

volley ("leap", 2, 3);