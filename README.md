#JSON : JavaScript Object Notation


"cadet":{
	"id" : 101,
	"name":"aarti",
	"email":"aarti@gmail.com"
}


{
    "cadets":[
	{
		"id":101,
		"name":"aarti",
		"email":"aarti@gmail.com"
	},
	{
		"id":102,
		"name":"aarav",
		"email":"aarav@gmail.com"
	}
]
}


## Reference Links : 
* JSON Validator : https://jsonlint.com/

# json-server

* Install : sudo npm install -g json-server
* Run Server : json-server <filename.json>

## Reference Link :
* json-server : https://github.com/typicode/json-server

# REST : Representational State Transfer

* Helps in accessing resource by making http calls to REST API
* HttpMethods are called while making REST API Calls to perform CRUD jobs

C : Create :: Http POST
R : Retrieve :: Http GET
U : Update :: Http PUT
D : Delete :: Http DELETE


# ASYNC PROGRAMMING Using XMLHTTPRequest (XHR)

### Example Scenario:
1. Access the server
2. Make a Request
3. A Response (data) is expected
4. Populate DOM with Response

* Reference Link : https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest

* Steps

1. Create XMLHttpRequest Object
2. Open the Request with API Url
3. Send the Request
4. Receive the Response
5. Process the Response (DOM Manipulation)

## XHR ReadyState

Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.


# DOM : Document Object Manipulation

### Accessing DOM Elements
* getElementById --> unique retrieval
* getElementsByTagName --> collection retrieved
* getElementsByClassName --> collection retrieved


### Modify DOM Contents

* innerHTML
* innerText

## Reference Link :

* https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction