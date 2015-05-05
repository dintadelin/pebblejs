var UI = require('ui');
var card = new UI.Card({
  title: 'Hello World',
  body: 'This is your first Pebble app!',
  scrollable: true
});

card.show();
card.on('click', function(e) {
  card.subtitle('Button ' + e.button + ' pressed.');

var ajax = require('ajax');
ajax({ url: 'http://api.theysaidso.com/qod.json', type: 'json' },
  function(data) {
    card.body(data.contents.quote);
    card.title(data.contents.author);
    }
);


  
