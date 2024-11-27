Node.js Basics - 0x05
This repository focuses on foundational Node.js concepts and practical applications, including creating HTTP servers, file handling, using Express.js, and leveraging modern JavaScript features. The project aims to develop skills in back-end development using Node.js.

Table of Contents
Description
Learning Objectives
Getting Started
Tasks Overview
Provided Files
Requirements
Usage
Author
Description
This project involves implementing several functionalities using Node.js, such as running JavaScript files, processing input/output, interacting with files, and creating servers. Both Node.js's core modules and the Express.js framework are utilized to provide a deeper understanding of back-end development.

Learning Objectives
By the end of this project, you should be able to:

Execute JavaScript code using Node.js.
Work with Node.js modules and specific modules like fs for file operations.
Handle process environment variables and command-line arguments.
Create HTTP servers using Node.js and Express.js.
Develop advanced routes in Express.js.
Use ES6 syntax in Node.js with Babel.
Utilize Nodemon to speed up development.
Getting Started
Prerequisites
Node.js version: 12.x.x or above.
OS: Ubuntu 18.04 LTS.
Dependencies: Install using npm install.
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/<your-username>/alx-backend-javascript.git
Navigate to the project directory:
bash
Copy code
cd 0x05-Node_JS_basic
Install the required dependencies:
bash
Copy code
npm install
Tasks Overview
0. Executing Basic JavaScript with Node.js
File: 0-console.js
Function displayMessage outputs a string to the console.
Usage:
bash
Copy code
node 0-main.js
1. Using Process stdin
File: 1-stdin.js
Creates an interactive program that accepts user input and outputs a response.
2. Reading a File Synchronously
File: 2-read_file.js
Function countStudents reads and processes a CSV file synchronously.
3. Reading a File Asynchronously
File: 3-read_file_async.js
Function countStudents reads and processes a CSV file asynchronously using Promises.
4. Simple HTTP Server Using Node.js
File: 4-http.js
Implements an HTTP server responding with Hello Holberton School! for all endpoints.
5. Complex HTTP Server Using Node.js
File: 5-http.js
Adds dynamic behavior to the server with /students endpoint, displaying student details.
6. Simple HTTP Server Using Express
File: 6-http_express.js
Recreates the HTTP server using Express.js for better modularity.
7. Complex HTTP Server Using Express
File: 7-http_express.js
Extends the Express server to dynamically serve student data for /students endpoint.
Provided Files
database.csv: Contains sample student data for tasks.
package.json: Specifies project dependencies and scripts.
.eslintrc.js: Configures ESLint for linting JavaScript files.
babel.config.js: Enables ES6+ support via Babel.
Requirements
Use js file extension.
Code must pass tests with npm run test.
Code must pass linting with npm run full-test.
Export all functions/classes using module.exports.
Usage
Run individual tasks:
bash
Copy code
node <task-file>
Example:
bash
Copy code
node 1-stdin.js
Start the HTTP server:
bash
Copy code
node 4-http.js
Test with curl:
bash
Copy code
curl localhost:1245
Author
Halidu Mustapha
GitHub: hmoustapher
