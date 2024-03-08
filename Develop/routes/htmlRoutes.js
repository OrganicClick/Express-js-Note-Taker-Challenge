const path = require('path');

const router = require('express').Router();

// Route to serve the index.html file
router.get('/', (req, res) => {
  // Sending the index.html file when root URL is accessed
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route to serve the notes.html file
router.get('/notes', (req, res) => {
  // Sending the notes.html file when /notes URL is accessed
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
