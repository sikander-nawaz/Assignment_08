// Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// // SOLUTION:
// VALUES 
let basicSalary = 180000;
let hra_1 = (20/100) * basicSalary;
let da_1 = (80/100) * basicSalary;
let grossSalary_1 = basicSalary + hra_1 + da_1;

let hra_2 = (25/100) * basicSalary;
let da_2 = (90/100) * basicSalary;
let grossSalary_2 = basicSalary + hra_2 + da_2;

let hra_3 = (30/100) * basicSalary;
let da_3 = (95/100) * basicSalary;
let grossSalary_3 = basicSalary + hra_3 + da_3;

// // USING ELSE_IF CONDITION 
if (basicSalary <= 10000) {
    console.log(`Gross Salary = ${grossSalary_1}`); 
}else if (basicSalary > 10000 && basicSalary <= 20000) {
    console.log(`Gross Salary = ${grossSalary_2}`);
}else{
    console.log(`Gross Salary = ${grossSalary_3}`);
}