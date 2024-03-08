const fs = require('fs');
const path = require('path'); // Importing the path module for file path manipulation
const uniqid = require('uniqid');

const router = require('express').Router();

// Route to get all notes from db.json
router.get('/notes', (req, res) => {
  // Reading db.json file to get all notes
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      // Sending error response if there's an error reading the database
      res.status(500).json({ error: 'Error reading the database' });
      return;
    }
    // Sending the notes data as JSON response
    res.json(JSON.parse(data));
  });
});

// Route to save a new note to db.json
router.post('/notes', (req, res) => {
  const newNote = req.body;
  newNote.id = uniqid(); // Assigning a unique ID to the note

  // Reading db.json file to get existing notes
  fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      // Sending error response if there's an error reading the database
      res.status(500).json({ error: 'Error reading the database' });
      return;
    }
    const notes = JSON.parse(data);
    notes.push(newNote);

    // Writing updated notes data to db.json file
    fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
      if (err) {
        console.error(err);
        // Sending error response if there's an error writing to the database
        res.status(500).json({ error: 'Error writing to the database' });
        return;
      }
      // Sending the newly added note as JSON response
      res.json(newNote);
    });
  });
});

module.exports = router;
