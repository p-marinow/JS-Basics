function exam (slojnost, zavurtqnost, stranici) {


    slojnost = Number(slojnost);
    zavurtqnost = Number(zavurtqnost);
    stranici = Number(stranici);


    if (slojnost >= 80 &&  zavurtqnost >= 80  && stranici >= 8) {
        console.log(`Legacy`);
    } else if (slojnost >= 80 &&  zavurtqnost <= 10) {
        console.log(`Master`);      
    }  else if (slojnost <= 10) {
        console.log(`Elementary`);
    } else if (slojnost <= 30 && slojnost > 10 && stranici <= 1) {
        console.log(`Easy`);
    } else if (zavurtqnost >= 50  && stranici >= 2) {
        console.log(`Hard`);
    } else {
        console.log(`Regular`);
    }
}

exam (80, 40 , 3);