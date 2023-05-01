const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const port = 3000;

// Set up the view engine and static files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set up body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define routes and handlers here
app.use('/', messageRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
