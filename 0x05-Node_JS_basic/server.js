const express = require('express');
const app = express();

// Your routes go here
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on http://localhost:1245');
});

