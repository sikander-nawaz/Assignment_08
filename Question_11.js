let month = 15;

if (month === 01 || month === 03 || month === 05 || month === 07 || month === 08 || month === 10 || month === 12) {
    console.log(31);
} else if (month === 04 || month === 06 || month === 09 || month === 11) {
    console.log(30);
} else if (month === 02) {
    console.log(28);
}else{
    console.log("Masti Kar Rya Shorya");
}