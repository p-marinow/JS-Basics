function total (naemZala) {

        let cake = Number(naemZala) * 0.2;
        let drinks = cake - (cake * 45)/100;
        let animator = Number(naemZala) / 3;
        let total = Number(naemZala) + cake + drinks + animator;
        console.log(total);
}


total (2250);