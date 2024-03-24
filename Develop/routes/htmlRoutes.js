const path = require('path');

const router = require('express').Router();

// Route to serve the index.html file
router.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '../public/index.html');
  console.log(`Attempting to send ${indexPath}`);
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
  const notesPath = path.join(__dirname, '../public/notes.html');
  console.log(`Attempting to send ${notesPath}`);
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
