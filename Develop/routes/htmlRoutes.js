const path = require('path');
const express = require('express');
const router = express.Router();

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

// Serve JavaScript files
router.get('/assets/js/index.js', (req, res) => {
  const indexPath = path.join(__dirname, '../public/assets/js/index.js'); // Correcting the path to match the directory structure
  console.log(`Attempting to send ${indexPath}`);
  res.sendFile(indexPath, {
    headers: {
      'Content-Type': 'application/javascript' // Set the Content-Type header to 'application/javascript'
    }
  }, (err) => {
    if (err) {
      console.error(`Error sending ${indexPath}:`, err);
      res.status(500).send('Error sending index.js');
    } else {
      console.log(`Successfully sent ${indexPath}`);
    }
  });
});

module.exports = router;
