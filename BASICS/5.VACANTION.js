function money (input) {

    let tripPrice = Number(input[0]);
    let totalMoney = Number(input[1]);
    let spendCount = 0;
    let index = 2;
    let isSpend = false;
    let days = 0;

    while (totalMoney < tripPrice) {
        let balance = input[index];
        index++;
        let money = Number(input[index]);
    
        if (balance === "save") {
            totalMoney += money;
            spendCount = 0;
        } else if (balance === "spend") {
            totalMoney -= money;
            spendCount++;

            if (totalMoney <0) {
                totalMoney = 0;
            }
        }
    
        days++;

        if (spendCount === 5) {
            
            isSpend = true;
            break;
        }
        

        index++;
    }

    if (isSpend) {
        console.log(`You can't save the money.`);
        console.log(`${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }


}


money ([110, 60, "spend", 10, "spend", 10, "spend", 10, "spend", 10, "spend", 10]);