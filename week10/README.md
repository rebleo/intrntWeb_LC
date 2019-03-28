
### Week 10
### Intro to Node + Express

[Node.js](https://nodejs.org/en/)(aka Node) is a version of Javascript that works outside the browser. It can run on the command line and on servers.

Node was originally used for writing backend applications without a browser, though it can be used to manage the server in addition to the software you write for a browser ECMAScript engine for builidng server side apps. Uses [V8](https://v8.dev/)

#### Event / Callback driven 
A callback function is registered for a specific event. When that event occurs the callback method is run.

#### Prototyping a Server
In order to run node serves that are accessible via the web, we'll need somewhere to host it. Luckily our Storm servers have node configured. For today, we are going to be using code that will mimick a server so that we can prototype using a local port - in leiu of the python local server ;)


#### Step 1: Installing / Accessing Node
Check to see if you have Node installed. On your command line - in your project folder type:

```
node -v
```

* If you have Windows: [dwnld node](https://nodejs.org/en/)
* If you have MacOS (if you have [Homebrew](https://brew.sh/) installed): brew install node

like python once installed you can run node by typing "node" into the command line
```
node [then start writing javascript]
```
To quit out of node:
```
CNTRL / CNTRL C
```

#### Step 2: Initiating Node Packages w/ NPM
npm is the node package manager. It's a common way to install any node package which add to the base functionality.  
[search for packages](https://www.npmjs.com/).

Go to yr project directory + type: 
```
npm init
```
To install a package: 
```
npm install <module_name> -- save
```
To install a node package globablly: 
```
install -g
```
#### Step 3: Installing Express
[Express](https://expressjs.com) is a framework for making HTTP servers w/ node. Express is one of the most popular frameworks for Node. It acts as a web server, querying input, directing routing for mobile and web applications. You can use it to create your own API, aka your own interface between programs.

1. Start by creating a directory for your project + place a previous website project inside it. We will create a .js server file to then server up the client side .html, .css + .js files. 
pr ojectFolder --> clientFolder

2. To install you use npm in the directory that will contain yr project. In your terminal cd into yr project folder + type: 
```
npm init 
```
which will trigger a guide, asking you some questions, and generating a basic package.json file that will list all of your needed node.js packages to be installed from npm and any other basic info relating to your project.

3. After this is completed, we need to tell npm to install the Express package. 
```
npm install express --save
```
***
#### Step 4: Writing our API in a new .js file
1. Now we can create and open up our javascript file. I’ll name the sample code theServer.js. Inside our main JavasScript file - in our text editor - we’ll need to require Express so we can use it. 
```
const theExpress = require('express');.
```
2. Now that we’ve pulled in the Express framework, we can use it. We’ll create an express app
```
const theApp = express();
```
3. At this point, we have only added two lines to our file. We’ve created an app instance of Express and can now add functionality to that instance. Let’s listen to connections on a specified TCP port from our local machine.
```
const thePort = theApp.listen(12345);
```
4. We can easily serve static files from the front end software folder we've already created. 
```
localhost:12345/
```
#### Running the Server
In your terminal:
```
node myServer.js
```
to quit yr server
```
command C
```
##### Server Reloading
While you are developing you may make lots of changes to your code and it may be annoying to have to stop and restart your server constantly.

There are various npm packages to deal with this. One simple one is nodemon which will run a server and watch for changes to your code. If your code changes because you saved updated code in your text editor, nodemon will watch and re-serve the updated page. To install globally for use in all yr projects:
```
npm install nodemon -g
```
Now instead of node theServer.js you'll use the command:
```
nodemon theServer.js
```
#### Building your own API w/ Express
#### Routes
Simplified explanation: A REST API stands for a REpresentational State Transfer. This allows you to create an API that accepts GET requests to serve information. A “route” is how the server responds to a specific request based on the request’s “path”. 
Using Express, we can serve a route. By typing in a url such as website.com/search/sriracha, this route search/sriracha gets interpreted by our server through its API to search for our object and then send back particular data

Here is a basic Express server which responds with “Hello World” when the client requests the path “/”:
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

#### Other Routes
Of course a route can be for any “path”, here is an example for “/otherData”:
```
theApp.get('/otherData', function (theRequest, theResponse) {
  theResponse.send('Hello Worlds!!')
})
```
When a user makes a request, we send back a response.

Routing is particularly useful for executing specific code based on the user’s specific route.
```
theApp.get('/this_route', specialFunction);
```
Our created function looks like:
```
function specialFunction(theRequest, theResponse) {
  theResponse.send("Running our special function.");
}
```
We pass the parameters request and response, which references http’s request-response protocol. You can also pass html, either inside the send request, or more conveniently, as a passed variable containing your html.
```
function specialFunction(theRequest, theResponse) {
  let theMessage = '<h1>Headline</h1><p>Some information on this topic.</p>';
  theResponse.send(theMessage);
}
```
#### Serving a Static Webpage (HTML, CSS, + front end JS)
```
theApp.use(theExpress.static('pages/viewer'))
```

