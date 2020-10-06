function shoping (strawberriesPrice, bananas, oranges, berries, strawberries) {
    
        let berriesPrice = (Number(strawberriesPrice)/2);
        let orangesPrice = berriesPrice - (0.4 * berriesPrice);
        let bananasPrice = berriesPrice - (0.8 * berriesPrice);


        let total = Number(strawberries) * Number(strawberriesPrice) + Number(bananas) * bananasPrice + Number(berries) * berriesPrice + Number(oranges) * 
        orangesPrice;

        console.log(total.toFixed(2));

}

shoping (48, 10, 3.3, 6.5, 1.7);