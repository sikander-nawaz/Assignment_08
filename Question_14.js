// Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For the first 50 units Rs. 0.50/unit
// For the next 100 units Rs. 0.75/unit
// For the next 100 units Rs. 1.20/unit
// For units above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill. 

// SOLUTION
// VALUES 
let units = 255;
let unitPrice;
let additonalSurcharge;
let totalBill;

// USING ELSE_IF CONDITION 
if (units <= 50) {
    let unitPrice = 0.50 * units;
    let additonalSurcharge = (20/100) * unitPrice;
    let totalBill = additonalSurcharge + unitPrice;
    console.log(`Total Bill = ${totalBill}`);

}else if (units > 50 && units <= 150) {
    let unitPrice = 0.75 * units;
    let additonalSurcharge = (20/100) * unitPrice;
    let totalBill = additonalSurcharge + unitPrice;
    console.log(`Total Bill = ${totalBill}`);

}else if (units > 150 && units <= 250) {
    let unitPrice = 1.20 * units;
    let additonalSurcharge = (20/100) * unitPrice;
    let totalBill = additonalSurcharge + unitPrice;
    console.log(`Total Bill = ${totalBill}`);

}else{
    let unitPrice = 1.50 * units;
    let additonalSurcharge = (20/100) * unitPrice;
    let totalBill = additonalSurcharge + unitPrice;
    console.log(`Total Bill = ${totalBill}`);
}