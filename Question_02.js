// Write a js program to find the maximum between three numbers.

// VALUES 
let num1 = 25;
let num2 = 09;
let num3 = 04;

// SOLUTION:
// USING ELSE_IF CONDITION 
if (num1 > num2){
    if(num1 > num3){
        console.log(`The Maximum Number is ${num1}`);
    }
}else if(num2 > num3){
    if (num2 > num1) {
        console.log(`The Maximum Number is ${num2}`);
    }
}else{
    console.log(`The Maximum Number is ${num3}`);
}