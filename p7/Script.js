// a. Form Validation
function validateForm() {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const output = document.getElementById('form-output');
if (name === '' || email === '' || password === '') {
output.textContent = 'All fields are required.';
output.style.color = 'red';
return false;
} else {
output.textContent = `Welcome, ${name}! You have successfully registered.`;
output.style.color = 'green';
return false; // Prevent actual form submission for this example
}
}
// b. Open a new window
function openNewTab() {
window.open('https://www.wikipedia.org', '_blank', 'width=800,height=600');
}
// c. Change background color on button click
let currentColorIndex = 0;
const colorsArray = ['#74b9ff', '#55efc4', '#ffeaa7', '#fab1a0', '#fd79a8'];
function toggleBackgroundColor() {
document.body.style.backgroundColor = colorsArray[currentColorIndex];
currentColorIndex = (currentColorIndex + 1) % colorsArray.length;
}
// d. Display calendar based on month and year input in a calendar format
function displayCalendar() {
const year = parseInt(document.getElementById('year').value);
const month = parseInt(document.getElementById('month').value);
const daysInMonth = new Date(year, month + 1, 0).getDate(); // Number of days in the month
const firstDayOfMonth = new Date(year, month, 1).getDay(); // First day of the month (0 = Sunday, 6 =Saturday)
let calendarHTML = `<h3>Calendar for ${new Date(year, month).toLocaleString('default', { month:
'long' })} ${year}</h3>`;
calendarHTML += `<table border="1" cellspacing="0" cellpadding="5" style="width: 100%; text-align:
center;">`;
calendarHTML+=`<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</t
h><th>Sat</th></tr>`;
let day = 1;
calendarHTML += `<tr>`;
// Fill empty days before the first day of the month
for (let i = 0; i < firstDayOfMonth; i++) {
calendarHTML += `<td></td>`;
}
// Fill the actual days of the month
for (let i = firstDayOfMonth; i < 7; i++) {
calendarHTML += `<td>${day}</td>`;
day++;
}
calendarHTML += `</tr>`;
// Continue filling the rest of the month
while (day <= daysInMonth) {
calendarHTML += `<tr>`;
for (let i = 0; i < 7 && day <= daysInMonth; i++) {
calendarHTML += `<td>${day}</td>`;
day++;
}
calendarHTML += `</tr>`;
}
calendarHTML += `</table>`;
document.getElementById('calendar-output').innerHTML = calendarHTML;
}
// e. Mouse over event to change color of box
function changeHoverBoxColor() {
document.getElementById('hover-box').style.backgroundColor = '#81ecec';
}
function resetHoverBoxColor() {
document.getElementById('hover-box').style.backgroundColor = '#dfe6e9';
}