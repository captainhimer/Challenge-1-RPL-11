bmi = (bb, tb) => {
    const a = bb / Math.pow((tb / 100),2);
    var s;
    if(a < 18.5){
        return s = "Asli Kurus Bangettttt";
    }else if(a>= 18.5 && a <= 24.9){
        return s = "Ideal";
    }else if(a>= 25 && a <= 24.9){
        return s = "Kelebihan Berat Badan";
    }else{
        return s = "Obesitas";
    }
}

console.log("3. Ukuran BMI : " + bmi(60,170));