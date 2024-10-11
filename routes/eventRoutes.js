const express = require('express');
const controller = require('../controllers/eventController');

const router = express.Router();

// GET /events: send all events to the user, before implementing controllers
router.get('/', (req, res) => {
  res.render('events');
});
// router.get('/', controller.index);

// GET /events/new: send html form for creating a new event
router.get('/newEvent', (req, res) => {
  res.render('newEvent');
});
// router.get('/new', controller.new);

// POST /events: create a new event, before implementing controllers
// router.post('/', (req, res) => {
//   res.render('');
// });
// router.post('/', controller.create);

// GET /events/event: send individual event to user
router.get('/event', (req, res) => {
  res.render('event');
});
// router.get('/:id', controller.show);

// GET /events/:id/edit: send html form for editing an existing event, before implementing controllers
// router.get('/:id/edit', controller.edit);

// PUT /events/:id: update a event by id
router.put('/:id', controller.update);

// DELETE /events/:id: delete the event identified by id, before implementing controllers;
// router.delete('/:id', controller.delete);

module.exports = router;
