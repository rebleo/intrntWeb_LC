### Week 11 - Express + HTTP Methods
#### Routing + Route paths
Routing refers to how an application’s endpoints (URIs) respond to client requests. You define routing using Express methods that correspond to HTTP methods .get() to handle GET requests + .post() for POST requests.

These methods specify a callback function triggered when the application receives a request at a specified route or endpoint + HTTP method.

Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.

This route path will match requests to the root route, /.
```
theApp.get('/', function (theRequest, theResponse) {
  theResponse.send('root')
})
```
This route path will match requests to /about.
```
theApp.get('/potato', function (theRequest, theResponse) {
 theResponse.send('potato')
})
```
#### Static + Dynamic files
Express can be configured to serve static files as well as dynamic routes. In this example any file in the “viewer” directory will be served if it’s name is requested:
```
theApp.use(theExpress.static('viewer'));
```
If you would like to dynamically serve a file based upon a request to a “route” you can use the “sendFile” function:
```
theApp.get('/randomTxt', function(theRequest, theResponse) {
	var fileToSend = "theRandom.txt";
	// Files inside "viewer" folder
  theResponse.sendfile(fileToSend, {root: './viewer'});
});
```
#### HTML Forms
Forms allow the page to take input from a user and send it to a server for processing. Also, using JavaScript the page can be made responsive or interactive by respond to form related data or events.

Putting a form on a page is as simple as using the various form tags nested within a <form> element.

```
	<form>

	</form>
```
There is an entire class of INPUT type form elements
##### Text Field:
Allows text to be entered. The “value” attribute can be used to specify a default value.
```
<input type="text" name="userName" value="..." />
```
##### Hidden Field:
Allows a value to be in the form but not displayed to the user. The “value” attribute specifies the value.
```
<input type="hidden" name="inVisible" value="..." />
```

##### Button:
Button that can be pressed by the user. The “value” attribute is what displays on the page. Generally this is used to trigger an event that will call some JavaScript.
```
<input type="button" name="theButton" value="click!" />

```
##### Submit:
button that is used to submit the form to the server. The “value” attribute is what display inside the button.
```
<input type="submit" name="theSubmitButton" value="Submit" />

```
##### Reset:
A button that is used to reset the form to the state it was when loaded. The “value” attribute is what display inside the button.
```
<input type="reset" name="theResetButton" value="Reset" />
```
##### Radio Buttons:
A series of radio buttons that allow the user to choose between a series of options. Each one has the same “name” attribute but a different “value” attribute.
```
<input type="radio" name="radioButton" value="Radio 1" />
<input type="radio" name="radioButton" value="Radio 2" />
```
#### Sending Data
In order for a form to submit information to a server for processing, we need to use the “action” and “method” attributes.

#### HTTP Method ”POST”
Using method=”POST” on an HTML form sends the data along with the request to the server behind the scenes (with the HTTP headers) and isn’t visible to the user so it can’t be book marked or otherwise saved. It might be a bit more private in this manner.

#### HTTP Method ”GET”
Using method=”GET” on a form sends the data “url encoded” as a query string to the server which displays on the URL. You would want to use this for search results that are to be shared or bookmarked for later retrieval.

#### action attribute
The “action” attribute is where to send the form data when the submit button is pressed.
```
<form method="GET" action="/getTheData">
	<input type="text" name="userName" value="..." />
	<input type="submit" name="theSubmitButton" value="Submit" />
</form>
```

#### Receiving Data
Express receives the data from the form as part of the request. You have to make a “route” for “post” if the method is post or “get” if the method is get.

First we need to install a piece of “middleware” to work with POST data in Express. The [body-parser](https://github.com/expressjs/body-parser) will take care of parsing the post as it comes in making the variables available to us in the the “route”. On the command line in our project folder we install the package.
```
npm install body-parser
```
then in our theServer.js file we use:
```
var bodyParser = require('body-parser');
// for parsing form data
var urlencodedParser = bodyParser.urlencoded({ extended: true });
theApp.use(urlencodedParser);
```
Now, each “name” from the form elements will come in as part of the theRequest.body object.
#### POST Route
The POST method is used to submit an entity to the specified resource, often causing a change in state or side effects on the server.
```
theApp.post('/getTheData', function(theRequest, theResponse) {
    var textValue = theRequest.body.userName;

  theRequest.send("You submitted: " + textValue);
});
```
#### GET Route
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data. If a form is submitted with ”GET” the data will come in on the query string and can be parsed as follows:
```
theApp.get('/getTheData', function(theRequest, theResponse) {
    var textValue = theRequest.query.userName;

    res.send("You submitted: " + textValue);
});
```
#### Response Methods
The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.
* [res.download()](https://expressjs.com/en/4x/api.html#res.download) - Prompt a file to be downloaded
* [res.end()](https://expressjs.com/en/4x/api.html#res.end) - end the response process
* [res.json()](https://expressjs.com/en/4x/api.html#res.json) - send a json response
* [res.redirect()](https://expressjs.com/en/4x/api.html#res.redirect) - redirect a request
* more [here](https://expressjs.com/en/guide/routing.html)
