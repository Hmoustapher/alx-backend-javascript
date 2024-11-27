// 1-stdin.js
const readline = require('readline');

// Create an interface to read from stdin (standard input) and write to stdout (standard output)
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their name
rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  // After the user provides their name, display the message
  console.log(`Your name is: ${name}`);
  
  // Closing the program with a message
  console.log('This important software is now closing');
  
  // Close the readline interface
  rl.close();
});
