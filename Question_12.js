// Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics, and Computer. Calculate percentage and grade according to the following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

// VALUES 
let phy = 25;
let che = 25;
let bio = 25;
let math = 25;
let comp = 25;
const total = 500;
let obtained = phy + che + bio + math + comp;
let percentage = (obtained * 100) / total;

console.log(`Obtained Marks = ${obtained}`);
console.log(`Percentage = ${percentage}%`);

// SOLUTION
// USING ELSE_IF CONDITION
if (percentage >=90) {
    console.log("Grade A");
}else if (percentage >= 80 && percentage < 90) {
    console.log("Grade B");
}else if (percentage >= 70 && percentage < 80) {
    console.log("Grade C");
}else if (percentage >= 60 && percentage < 70) {
    console.log("Grade D");
}else if (percentage >= 40 && percentage < 60) {
    console.log("Grade E");
}else{
    console.log("Grade F");
}