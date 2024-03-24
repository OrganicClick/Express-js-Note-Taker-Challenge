const express = require('express');
const apiRoutes = require('./Develop/routes/apiRoutes'); // Importing API routes
const htmlRoutes = require('./Develop/routes/htmlRoutes'); // Importing HTML routes
const path = require('path'); // Importing the path module for file path manipulation

const app = express();
const PORT = process.env.PORT || 3001; // Setting up the port to listen on, defaulting to 3001 if not provided

// Log incoming requests
app.use((req, res, next) => {
  console.log(`Request received: ${req.method} ${req.url}`);
  next();
});

app.use(express.urlencoded({ extended: true })); // Middleware to parse urlencoded data
app.use(express.json()); // Middleware to parse JSON data
app.use(express.static(path.join(__dirname, 'Develop/public'))); // Middleware to serve static files from the public directory

app.use('/api', apiRoutes); // Mounting the API routes to /api path
app.use('/', htmlRoutes);   // Mounting the HTML routes to root path

// Log errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`); // Logging a message indicating that the server is running and on which port
});
