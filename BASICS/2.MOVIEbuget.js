function solve (buget, people, clothPrice) {

    buget = Number(buget);
    people = Number(people);
    clothPrice = Number(clothPrice);

    let decor = buget * 0.1;
    let totalClothPrice = people * clothPrice;

    if (people > 150) {
        totalClothPrice = totalClothPrice * 0.90;
    }

    let totalPrice = decor + totalClothPrice;

    if (buget < totalPrice) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalPrice - buget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(buget - totalPrice).toFixed(2)} leva left.`);
    }

}
solve(15437.62, 186, 57.99);