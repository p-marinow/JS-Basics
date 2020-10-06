function total (depoSum, time, addPerc) {
    let total = Number(depoSum) + Number(time) * ((Number(depoSum) * Number(addPerc)/100)/12);
    console.log(total);
}

total(200, 3, 5.7);