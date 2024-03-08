const express = require('express');
const apiRoutes = require('./routes/apiRoutes'); // Importing API routes
const htmlRoutes = require('./routes/htmlRoutes'); // Importing HTML routes

const app = express();
const PORT = process.env.PORT || 3001; // Setting up the port to listen on, defaulting to 3001 if not provided

app.use(express.urlencoded({ extended: true })); // Middleware to parse urlencoded data
app.use(express.json()); // Middleware to parse JSON data
app.use(express.static('public')); // Middleware to serve static files from the public directory

app.use('/api', apiRoutes); // Mounting the API routes to /api path
app.use('/', htmlRoutes);   // Mounting the HTML routes to root path

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`); // Logging a message indicating that the server is running and on which port
});
