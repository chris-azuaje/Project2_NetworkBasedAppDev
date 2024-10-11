// require modules
const express = require('express');
const morgan = require('morgan');
const eventRoutes = require('./routes/eventRoutes');

// create app
const app = express();

let exampleEvents = [
  { id: 1, event: 'Event1' },
  { id: 2, event: 'Event2' },
  { id: 3, event: 'Event3' },
];

// configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

// mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
// app.use(methodOverride('_method'));

// Set up routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/events/:eid', (req, res) => {
  console.log(req.params);
  let id = req.params.eid;
  let event = exampleEvents.find((element) => element.id === parseInt(id));
  // res.send('Send event with id ' + id);
  res.json(event);
});

app.get('/about', (req, res) => {
  // res.send('This is the about page');
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.use('/events', eventRoutes);

app.use((req, res, next) => {
  let err = new Error('The server cannot locate ' + req.url);
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  if (!err.status) {
    err.status = 500;
    err.message = 'Internal Server Error';
  }

  res.status(err.status);
  res.render('error', { error: err });
});

app.listen(port, host, () => {
  console.log('The server is running at port', port);
});
