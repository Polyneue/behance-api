# behance-api
[![Build Status](https://travis-ci.org/Polyneue/behance-api.svg?branch=master)](https://travis-ci.org/Polyneue/behance-api)
[![Coverage Status](https://coveralls.io/repos/github/Polyneue/behance-api/badge.svg?branch=master)](https://coveralls.io/github/Polyneue/behance-api?branch=master)
[![bitHound Dependencies](https://www.bithound.io/github/Polyneue/behance-api/badges/dependencies.svg)](https://www.bithound.io/github/Polyneue/behance-api/master/dependencies/npm)  

Node.js wrapper for the Behance API, see the [Behance API docs](https://www.behance.net/dev/api/endpoints/) for more details. In order to use the Behance API you will need to [register your application](https://www.behance.net/dev/register) to receive your API key. 

##Installation
Install package with NPM

```
npm install behance-api
```

##Usage
Making a request looks something like this:

```javascript
var Behance = require('behance-api'),
	Be = new Behance(API_KEY),
	fs = require('fs');

Be.projects({q: 'motorcycle'}, function(err, res, data) {
	// Do something with the data received from the API
	fs.writeFile('projectsData.json', JSON.stringify(data, null, 4));
});
```

The snippet above will make a request to the Behance API and receive the first page of results that match the `motorcycle` query for the `/projects/` endpoint. It then saves that data to a json file to be used. Every callback gets three arguments; an error (if there is one), the HTTP response, and a JSON object.


##Projects Endpoint
Search for projects.  

```javascript
Be.projects(opts, function(err, res, data) {
	console.dir(data);
});
```

##Project Endpoint
All of the project related functions require a project id.

###Project
Get the information and content of a project.  

```javascript
Be.project(id, function(err, res, data) {
	console.dir(data);
});
```

###Project Comments
Get the comments for a project.   

```javascript
Be.projectComments(id, function(err, res, data) {
	console.dir(data);
});
```

##Users Endpoint
Search for users.  

```javascript
Be.users(opts, function(err, res, data) {
	console.dir(data);
});
```

##User Endpoint
All of the user related functions require a user id or username.

###User
Get basic information about a user.

```javascript
Be.user(id, function(err, res, data) {
	console.dir(data);
});
```

###User Projects	
Get the projects published by a user.  

```javascript
Be.userProjects(id, opts, function(err, res, data) {
	console.dir(data);
});
```

###User Wips
Get the works-in-progress published by a user.  

```javascript
Be.userWips(id, opts, function(err, res, data) {
	console.dir(data);
})
```

###User Appreciations
Get a list of user's recently appreciated projects.  

```javascript
Be.userApprecitations(id, opts, function(err, res, data) {
	console.dir(data);
});
```

###User Collections
Get a list of a user's collections.  

```javascript
Be.userCollections(id, opts, function(err, res, data) {
	console.dir(data);
});
```

###User Stats
Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.

```javascript
Be.userStats(id, function(err, res, data) {
	console.dir(data);
});
```

###User Followers
Get a list of creatives who follow the user.  

```javascript
Be.userFollowers(id, opts, function(err, res, data) {
	console.dir(data);
});
```

###User Following
Get a list of creatives followed by the user.  

```javascript
Be.userFollowing(id, opts, function(err, res, data) {
	console.dir(data);
});
```

###User Work Experience
A list of the user's professional experience

```javascript
Be.userWorkExperience(id, function(err, res, data) {
	console.dir(data);
});
```

##Collections Endpoint
Search for collections.  

```javascript
Be.collections(opts, function(err, res, data) {
	console.dir(data);
});
```

##Collection Endpoint
All collection related functions require a collection id

###Collection
Get basic information about a collection.

```javascript
Be.collection(id, function(err, res, data) {
	console.dir(data);
});
```

###Collection Projects
Get projects from a collection.  

```javascript
Be.collectionProjects(id, opts, function(err, res, data) {
	console.dir(data);
});
```

##Creatives To Follow Endpoint
Provides a list of creatives you might be interested in following.  

```javascript
Be.creativesToFollow(opts, function(err, res, data) {
	console.dir(data);
});
```

##Creative Fields Endpoint
Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')

```javascript
Be.fields(function(err, res, data) {
	console.dir(data);
});
```

##To do
- Write validation for queries passed to each function.