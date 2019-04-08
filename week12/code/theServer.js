const theExpress = require('express');
const theApp = theExpress();
const thePort = theApp.listen(12345);
// for parsing form data
// will need to install this: https://www.npmjs.com/package/body-parser
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
theApp.use(urlencodedParser);
// templating
theApp.set('view engine', 'ejs');
// static files in viewer
theApp.use(theExpress.static('viewer'));
///
// create a globl empty array
var allTheData = [];
var theData;

theApp.post('/sendUserData', function(req, res) {
 // Because it's a POST we use req.body to get the data
   console.log(req.body.first, req.body.last);
  // res.send("They submitted: " + req.body.first + " " + req.body.last);
  // now we're gonna create a JSON (!!)

  // Create an object using JSON
 var data = {
    first: req.body.first,
    last: req.body.last
  };

  allTheData.push(data);
  theData = new Object();
 // put data into a the global array.
  theData.allTheData = allTheData;
  console.log(theData);
  // package array into an object to pass into template
  res.render('template.ejs', theData);
  // splice previsous user data from the array
 // allTheData.splice(0, allTheData.length);

});
// access the local port + serve the site at that url
theApp.listen(thePort, function() {
  console.log('Example app listening on port 12345!')
});


