const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.home);

router.get('/contact', mainController.contact);

// router.get('/about', mainController.about);

router.get('/about', (req, res) => {
  res.send('about page');
});

module.exports = router;
