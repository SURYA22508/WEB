// Math Object demonstration with dynamic input
function calculateMath() {
const num = parseFloat(document.getElementById("math-input").value);
const mathOutput = document.getElementById("math-output");
if (isNaN(num)) {
mathOutput.innerHTML = "Please enter a valid number.";
return;
}
let result = `
Math.round(${num}): ${Math.round(num)}<br>
Math.pow(${num}, 2): ${Math.pow(num, 2)}<br>
Math.sqrt(${num}): ${Math.sqrt(num)}<br>
Math.abs(${num}): ${Math.abs(num)}<br>
Math.max(${num}, 5, 10): ${Math.max(num, 5, 10)}<br>
`;
mathOutput.innerHTML = result;
}
// String Object demonstration with dynamic input
function manipulateString() {
const str = document.getElementById("string-input").value;
const stringOutput = document.getElementById("string-output");
if (!str) {
stringOutput.innerHTML = "Please enter a valid string.";
return;
}
let result = `
String length: ${str.length}<br>
Uppercase: ${str.toUpperCase()}<br>
Substring (0, 5): ${str.substring(0, 5)}<br>
Index of 'World': ${str.indexOf("World")}<br>
Replace 'World' with 'JavaScript': ${str.replace("World", "JavaScript")}<br>
`;
stringOutput.innerHTML = result;
}
// Array Object demonstration with dynamic input
function manipulateArray() {
const input = document.getElementById("array-input").value;
const arrayOutput = document.getElementById("array-output");
if (!input) {
arrayOutput.innerHTML = "Please enter a valid array (comma-separated values).";
return;
}
let arr = input.split(",").map(Number); 
// Convert to number array
arr.push(10); //push
arr.pop(); //pop 
arr.shift(); //shift
arr.unshift(0); //unshift
let result = `
Updated array after operations: [${arr}]<br>
Slice (1, 3): [${arr.slice(1, 3)}]<br>
`;
arrayOutput.innerHTML = result;
}
// Date Object demonstration with dynamic input
function processDate() {
const dateInput = document.getElementById("date-input").value;
const dateOutput = document.getElementById("date-output");
if (!dateInput) {
dateOutput.innerHTML = "Please select a valid date.";
return;
}
let date = new Date(dateInput);
let result = `
Full Date: ${date}<br>
Year: ${date.getFullYear()}<br>
Month: ${date.getMonth() + 1}<br> <!-- Month is zero-based, add 1 -->
Day of Month: ${date.getDate()}<br>
Day of Week: ${date.getDay()} (0 is Sunday)<br>
Hours: ${date.getHours()}<br>
Minutes: ${date.getMinutes()}<br>
`;
dateOutput.innerHTML = result;
}