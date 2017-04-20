# behance-api
[![Build Status](https://travis-ci.org/Polyneue/behance-api.svg?branch=master)](https://travis-ci.org/Polyneue/behance-api)
[![Coverage Status](https://coveralls.io/repos/github/Polyneue/behance-api/badge.svg?branch=master)](https://coveralls.io/github/Polyneue/behance-api?branch=master)
[![bitHound Dependencies](https://www.bithound.io/github/Polyneue/behance-api/badges/dependencies.svg)](https://www.bithound.io/github/Polyneue/behance-api/master/dependencies/npm)  

Node.js wrapper for the Behance API, see the [Behance API docs](https://www.behance.net/dev/api/endpoints/) for more details. In order to use the Behance API you will need to [register your application](https://www.behance.net/dev/register) to receive your API key.

## Installation
Install package with NPM

```
npm install behance-api --save
```

## Usage
Making a request looks something like this:

```javascript
// Dependencies
const Behance = require('behance-api')
const Be = new Behance(API_KEY)
const fs = require('fs')

// Get Projects Data
Be.projects({q: 'motorcycle'}, function (err, res, data) {
  // Handle Errors
  if (err) throw err

  // Do something with the data received from the API
  fs.writeFile('projectsData.json', JSON.stringify(data, null, 4))
})
```

The snippet above will make a request to the Behance API and receive the first page of results that match the `motorcycle` query for the `/projects/` endpoint. It then saves that data to a json file to be used. Every callback gets three arguments; an error (if there is one), the HTTP response, and a JSON object.

## API  

### Projects Endpoint
Search for projects.  

```javascript
Be.projects(opts, function (err, res, data) {
  console.dir(data)
})
```

### Project Endpoints
All of the project related functions require a project `id`.

```javascript
// Get the information and content of a project.  
Be.project(id, function (err, res, data) {
  console.dir(data)
})

// Get the comments for a project.   
Be.projectComments(id, function (err, res, data) {
  console.dir(data)
})
```

### Users Endpoint
Search for users.  

```javascript
Be.users(opts, function (err, res, data) {
  console.dir(data)
})
```

### User Endpoints
All of the user related functions require a user `id` or username.

```javascript
// Get basic information about a user.
Be.user(id, function (err, res, data) {
  console.dir(data)
})

// Get the projects published by a user.  
Be.userProjects(id, opts, function (err, res, data) {
  console.dir(data)
})

// Get the works-in-progress published by a user.  
Be.userWips(id, opts, function (err, res, data) {
  console.dir(data)
})

// Get a list of user's recently appreciated projects.  
Be.userApprecitations(id, opts, function (err, res, data) {
  console.dir(data)
})

// Get a list of a user's collections.  
Be.userCollections(id, opts, function (err, res, data) {
  console.dir(data)
})

// Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.
Be.userStats(id, function (err, res, data) {
  console.dir(data)
})

// Get a list of creatives who follow the user.  
Be.userFollowers(id, opts, function (err, res, data) {
  console.dir(data)
})

// Get a list of creatives followed by the user.  
Be.userFollowing(id, opts, function (err, res, data) {
  console.dir(data)
})

// A list of the user's professional experience
Be.userWorkExperience(id, function (err, res, data) {
  console.dir(data)
})
```

### Teams Endpoint
Search for teams.  

```javascript
Be.teams(opts, function(err, res, data) {
	console.dir(data)
})
```

### Team Endpoints
All of the team related functions require a team `id` or username.

```javascript
// Get basic information about a team.
Be.team(id, function (err, res, data) {
	console.dir(data)
})

// Get the projects published by a team.  
Be.teamProjects(id, opts, function (err, res, data) {
	console.dir(data)
})
```

### Collections Endpoint
Search for collections.  

```javascript
Be.collections(opts, function (err, res, data) {
  console.dir(data)
})
```

### Collection Endpoints
All collection related functions require a collection `id`

```javascript
// Get basic information about a collection.
Be.collection(id, function (err, res, data) {
  console.dir(data)
})

// Get projects from a collection.  
Be.collectionProjects(id, opts, function (err, res, data) {
  console.dir(data)
})
```

### Creatives To Follow Endpoint
Provides a list of creatives you might be interested in following.  

```javascript
Be.creativesToFollow(opts, function (err, res, data) {
  console.dir(data)
})
```

### Creative Fields Endpoint
Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')

```javascript
Be.fields(function (err, res, data) {
  console.dir(data)
})
```

## Tests
Run the tests with the following command:  

```
npm run test
```