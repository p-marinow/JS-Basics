function charity (days, cookers, cakes, gofrets, pancakes) {

    let production = Number(days) * Number(cookers);
    let cakesProof = production * Number(cakes) * 45;
    let gofretsProof = production * Number(gofrets) * 5.8;
    let pancakesProof = production * Number(pancakes) * 3.2;

    let totalProof = (cakesProof + gofretsProof + pancakesProof - ((cakesProof + gofretsProof + pancakesProof)/8));

    console.log(totalProof.toFixed(2));
}

charity(23, 8, 14, 30, 16);