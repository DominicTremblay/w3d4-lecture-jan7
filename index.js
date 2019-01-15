var express = require('express');

var app = express();
var port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const movieQuotesDb = {
  'd9424e04-9df6-4b76-86cc-9069ca8ee4bb': {
    id: 'd9424e04-9df6-4b76-86cc-9069ca8ee4bb',
    quote: 'Why so serious?',
    comments: ['70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac'],
  },
  '27b03e95-27d3-4ad1-9781-f4556c1dee3e': {
    id: '27b03e95-27d3-4ad1-9781-f4556c1dee3e',
    quote: 'YOU SHALL NOT PASS!',
    comments: [],
  },
  '5b2cdbcb-7b77-4b23-939f-5096300e1100': {
    id: '5b2cdbcb-7b77-4b23-939f-5096300e1100',
    quote: "It's called a hustle, sweetheart.",
    comments: [],
  },
  '917d445c-e8ae-4ed9-8609-4bf305de8ba8': {
    id: '917d445c-e8ae-4ed9-8609-4bf305de8ba8',
    quote: 'The greatest teacher, failure is.',
    comments: [],
  },
  '4ad11feb-a76a-42ae-a1c6-8e30dc12c3fe': {
    id: '4ad11feb-a76a-42ae-a1c6-8e30dc12c3fe',
    quote: 'Speak Friend and Enter',
    comments: [],
  },
};

const quoteComments = {
  '70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac': {
    id: '70fcf8bd-6cb0-42f3-9887-77aa9db4f0ac',
    comment: 'So awesome comment!',
  },
};

// End Points
app.get('/', function(req, res) {
  res.redirect('/quotes');
});

app.get('/quotes', function(req, res) {
  // List the quotes

  res.render('quotes', { quotes: movieQuotesDb, comments: quoteComments });
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
