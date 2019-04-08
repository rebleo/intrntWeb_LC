### Week 12

#### Express Templates
As we have experienced, generating HTML within a node.js/Express server can be painful. Fortunately, there is a solution called templates which allow you to create your HTML as a separate file and have the Express template system bind data to your variables.

There are many [templating systems](https://github.com/expressjs/express/wiki?_ga=1.148202167.14603651.1486561881#template-engines), many of which are cross-platform (moustache) and/or inspired by other platforms (jade/pug). These unfortunately are either complex to setup or require that you learn another language for authoring HTML. Fortunately, there is one system, ejs(embedded JavasScript) which allows regular HTML authoring with the ability to insert simple JavaScript statements which get run on the server side.

The first step to using [ejs](https://www.npmjs.com/package/ejs) with Express is to install the module:

```
npm i ejs

```
To use ejs in our express app, we set the “view engine” to be “ejs” and then create a template to use
```
theApp.set('view engine', 'ejs');

```
Here is a basic template:
```
<!DOCTYPE html>
<html lang="en">
<body>
        <h1>User Data Page</h1>
        <% if (user) {  %>
                <h2><%= user.First %><h2>
                <h3><%= user.Last %></h3>
        <% } %>
</body>
</html>
```
save it as “template.ejs” inside a folder called “views” which is the default.


Then to use a template as the response to a request we do the following:

```
theApp.get('/ejsTemplateTest', function(req, res) {
	var theData = {user: {First: "Rebecca", Last: "Leopold"}};
    res.render('template.ejs', theData);
});

```
The “render” function takes in the template file and binds the “data” to it. Of course, the “data” can be any data.

This is an array of data:
```
//var theData = {users: [{First: "Rebecca", Last: "Leopold"}, {First: "Larry", Last: "Jerry"}]};
```


##### More Details: [Templating w/ EJS](https://scotch.io/tutorials/use-ejs-to-template-your-node-application)

#### SINGLE PAGE APPLICATIONS
A [Single Page Application](https://en.wikipedia.org/wiki/Single-page_application) is a website that behaves more like a desktop application than a traditional web application where you go from page to page. One prime example of this might be GMail where you don’t have to leave the page to send a message or read new messages. It all functions in one browser location with the data being delivered behind the scenes.

#### Web Services
Web Services, where a server makes data available in a machine readable format (rather than formatted for human consumption) for loading by an application or script are one of the keys to making Single Page Applications a reality.

#### JSON
JSON stands for [JavaScript Object Notation](http://json.org/). It has become a standard way to provide machine readable data to and from web services. Despite the fact that JavaScript is part of it’s title, it is generally useful in all programming languages.

As stated on the json.org site: An object is an unordered set of name/value pairs. An object begins with { (left brace) and ends with } (right brace). Each name is followed by : (colon) and the name/value pairs are separated by , (comma).

Values can be string, number, null or boolean (true/false)

```
  {
    firstName: "Donald",
    lastName: "Glover"
  }

```
An array of JSON objects:
```
[
	{
		firstName: "Donald",
    	lastName: "Glover"
	},
	{
		firstName: "Frank",
    	lastName: "Ocean"
	},
	{
		firstName: "Kanye,
    	lastName: "West"
	}	
]
```
A JSON of an array of JSON objects:
```
{ Artists: 
	[ 
		{
			firstName: "Donald",
	    	lastName: "Glover"
		},
		{
			firstName: "Frank",
	    	lastName: "Ocean",
	    	age: 32
		},
		{
			firstName: "Kanye,
	    	lastName: "West"
		}	
	]
}
```
#### Single-page application
A single-page application (SPA) is a web application or web site that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from a server. This makes it so we only have one route, but dynamically changing the data.

#### Ajax
AJAX
AJAX (Aysnchronous JavaScript and XML) is a technique for dynamically loading data and altering a page after communicating with a server and without leaving the page. In other words, AJAX is what makes it all possible to develop Single Page Applications.

It is made possible by the [XMLHttpRequest](https://www.w3schools.com/XML/xml_http.asp) object

Unfortunately, there are quite a few security restrictions on making AJAX requests across domains. If you are interested in investigating those and how to overcome them, [checkout this](http://www.html5rocks.com/en/tutorials/cors/).

Fortunately, there are a few libraries such as jQuery that take much of the pain away.

More Information: [A Brief History of Ajax by Aaron Swartz](http://www.aaronsw.com/weblog/ajaxhistory)

#### USING JQUERY’S AJAX FUNCTIONS TO LOAD JSON
#### BUILDING SIMPLE WEBSERVICES USING NODE AND EXPRESS
As you may have seen in previous notes, we can easily send back JSON formatted data rather than HTML from our Node/Express servers. 
