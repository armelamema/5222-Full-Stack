const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config(); 

// Set up Pug
app.set('view engine', 'pug');
app.use(express.static('public')); 

// Routes will go here
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
