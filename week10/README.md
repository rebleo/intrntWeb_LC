
### Week 10
### Intro to Node + Express

[Node.js](https://nodejs.org/en/): ECMAScript engine for builidng server side apps. Uses [V8](https://v8.dev/)

#### Event / Callback driven 
A callback functino is registered for a specific event. When that event occurs the callback method is run.

#### Prototyping a Server
In order to run node serves that are accessible via the web, we'll need somewhere to host it. Luckily our Storm servers are have node configured. For today, we are going to be using code that will mimick a server so that we can prototype using a local port - in leiu of the python local server ;)



#### Step 1: Installing / Accessing Node
Check to see if you have Node installed. On your command line - in your project folder type:

```
which node
```
If you have node installed you should see something like this:
![](imgs/step1.png)

If you don’t have Node preinstalled (you should if you choose it as a “one-click app”) on your server, you’ll need to go through the following steps:

```
apt-get update
apt-get install nodejs
apt-get install nodejs-legacy
apt-get install npm

```
#### Step 2: Initiating Node Packages
npm is the node package manager. It's a common way to install any node package which add to the base functionality.  
[search for packages](https://www.npmjs.com/).
```
npm init
```
#### Step 3: Installing Express
[express](https://expressjs.com) is a framework for making HTTP servers w/ node. To install you use npm in the directory that will contain yr project:
 
```
npm install express
```
#### Step 4: Routes
A “route” is how the server responds to a specific request based on the request’s “path”. Here is a basic Express server which responds with “Hello World” when the client requests the path “/”:
```
const theExpress = require('express');
const theApp = theExpress();
const thePort = 12345;

theApp.get('/', function (theRequest, theResponse) {
  theResponse.send('Hello Worlds!!')
})

theApp.listen(thePort, function () {
  console.log('Example app listening on port 12345!')
})
```

[Express Routing Guide](https://expressjs.com/en/guide/routing.html)
#### Step 5: Running the Server
In your terminal:
```
node myServer.js
```
#### Step 5: Other Routes
Of course a route can be for any “path”, here is an example for “/somethingelse”:
```
theApp.get('/otherData', function (theRequest, theResponse) {
  theResponse.send('Hello Worlds!!')
})
```
