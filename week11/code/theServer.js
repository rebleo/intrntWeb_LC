const theExpress = require('express');
const theApp = theExpress();
// for now we are going to run it from a local port
// we'll need more when we want to deploy at a url.
const thePort = 12345;
theApp.use(theExpress.static('viewer'));
theApp.listen(thePort, function() {
  console.log('Example app listening on port 12345')
});
// Dynamic files
// theApp.get('/randomfile', function(theRequest, theResponse){
// 	const fileToSend = "random.txt";
// 	theResponse.sendfile(fileToSend, {root: './viewer'});
// });
theApp.set('view engine', 'esj');
