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
//
// access the local port + serve the site at that url
theApp.listen(thePort, function() {
  console.log('Example app listening on port 12345!')
})
// serve up static web files in directory
theApp.use(theExpress.static('viewer'));
///
//
// POST ROUTE
// theApp.post('/getTheData', function(theRequest, theResponse) {
//   var textValue = theRequest.body.userName;
//   // theRequest.send("You submitted: " + textValue);
//   // theResponse.send("{ " + textValue + " }");
//   console.log(textValue);
// });
//
//
// GET ROUTE
theApp.get('/getTheData', function(theRequest, theResponse) {
  var textValue = theRequest.query.userName;
  theResponse.send("<P>You submitted:</p> " + textValue);
  console.log(textValue);

});

//
// line 28 in the readme
theApp.get('/getRandomTxt', function(theRequest, theResponse) {
  var fileToSend = "theRandom.txt";
  // Files inside "viewer" folder
  theResponse.sendfile(fileToSend, {
    root: './viewer'
  });
});
theApp.get('/getAbout', function(theRequest, theResponse) {
  var fileToSend = "about.html";
  // Files inside "viewer" folder
  theResponse.sendfile(fileToSend, {
    root: './viewer'
  });
});
