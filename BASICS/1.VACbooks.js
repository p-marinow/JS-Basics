function reading (pages, pagesPerHour, daysToCompalate) {


    let timeNeeded = Number(pages) / Number(pagesPerHour);
    let daysNeeded = timeNeeded / Number(daysToCompalate);


    console.log(daysNeeded);

}


reading(432, 15, 4);