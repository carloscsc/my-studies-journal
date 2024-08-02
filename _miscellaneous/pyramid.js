// Define constants and variables
const character = "#"; // The character used to build the pyramid
const count = 8; // The number of rows in the pyramid
const rows = []; // An array to store each row of the pyramid

// Function to create a single row of the pyramid
function padRow(rowNumber, rowCount) {
  return (
    " ".repeat(rowCount - rowNumber) + // Spaces before the characters
    character.repeat(2 * rowNumber - 1) + // The pyramid characters
    " ".repeat(rowCount - rowNumber) // Spaces after the characters
  );
}

// Generate each row of the pyramid
for (let i = 1; i <= count; i++) {
  rows.push(padRow(i, count));
}

// Combine rows into a single string
let result = "";

for (const row of rows) {
  result = result + "\n" + row;
}

// Output the result
console.log(result);
