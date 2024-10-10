const express = require('express');
const controller = require('../controllers/eventController');

const router = express.Router();

// GET /events: send all events to the user
router.get('/', (req, res) => {
  res.render('events');
});

// GET /events/new: send html form for creating a new event
router.get('/newEvent', (req, res) => {
  res.render('newEvent');
});

// GET /events/event: send individual event to user
router.get('/event', (req, res) => {
  res.render('event');
});

//put /events/event: update a event by id
router.put('/:id', controller.update);
module.exports = router;
