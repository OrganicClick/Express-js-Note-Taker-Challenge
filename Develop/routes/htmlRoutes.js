const path = require('path');

const router = require('express').Router();

// Route to serve the index.html file
router.get('/', (req, res) => {
  // Construct the file path for index.html
  const indexPath = path.join(__dirname, '../public/index.html');
  console.log(`Attempting to send ${indexPath}`);
  
  // Send index.html file and handle errors if any
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error(`Error sending ${indexPath}:`, err);
      res.status(500).send('Error sending index.html');
    } else {
      console.log(`Successfully sent ${indexPath}`);
    }
  });
});

// Route to serve the notes.html file
router.get('/notes', (req, res) => {
  // Construct the file path for notes.html
  const notesPath = path.join(__dirname, '../public/notes.html');
  console.log(`Attempting to send ${notesPath}`);
  
  // Send notes.html file and handle errors if any
  res.sendFile(notesPath, (err) => {
    if (err) {
      console.error(`Error sending ${notesPath}:`, err);
      res.status(500).send('Error sending notes.html');
    } else {
      console.log(`Successfully sent ${notesPath}`);
    }
  });
});

module.exports = router;
