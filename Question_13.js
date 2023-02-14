// Write a js program to input the basic salary of an employee and calculate its Gross salary according to the following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%

// // SOLUTION:
// VALUES 
let basicSalary = 180000;
let hra;
let da;
let grossSalary;

// // USING ELSE_IF CONDITION 
if (basicSalary <= 10000) {
    let hra = (20/100) * basicSalary;
    let da = (80/100) * basicSalary;
    let grossSalary = basicSalary + hra + da;
    console.log(`Gross Salary = ${grossSalary}`); 

}else if (basicSalary > 10000 && basicSalary <= 20000) {
    let hra = (25/100) * basicSalary;
    let da = (90/100) * basicSalary;
    let grossSalary = basicSalary + hra + da;
    console.log(`Gross Salary = ${grossSalary}`);

}else{
    let hra = (30/100) * basicSalary;
    let da = (95/100) * basicSalary;
    let grossSalary = basicSalary + hra + da;
    console.log(`Gross Salary = ${grossSalary}`);
}