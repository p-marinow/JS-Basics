function fishTank (lenght ,width, height, percent) {

    let volume = Number(lenght) * Number(width) * Number(height);
    let waterVolume = volume * 0.001;
    let percentVolume = Number(percent) * 0.01;
    let fishTankVolume = waterVolume * (1 - percentVolume);


    console.log(fishTankVolume);
}

fishTank(85, 75, 47, 17);