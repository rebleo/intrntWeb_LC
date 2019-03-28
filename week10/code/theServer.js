// console.log("hey i'm a great javascript thing");

const theExpress = require('express');
const theApp = theExpress();
const thePort = theApp.listen(12345);


theApp.listen(thePort, function () {
  console.log('Example app listening on port 12345!')
})


theApp.use(theExpress.static('pages/viewer'))


theApp.get('/thisRoute', specialFunction);

function specialFunction(theRequest, theResponse) {

  const theMessage = '<h1>Headline</h1><p>Some information on this topic.</p>';
  theResponse.send(theMessage);
}