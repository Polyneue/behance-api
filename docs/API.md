# Behance API Documenation
This document contains all of the Behance endpoints that are accessible via the behance-api module. For example data from each response, visit the official [API site](https://www.behance.net/dev/api/endpoints/).

---

### Projects Endpoint
Search for projects.  

```javascript
Be.projects(opts, function (err, res, data) {
  console.dir(data);
});
```

#### opts
Type: `Object`  
For a list of options see [Project Endpoint](https://www.behance.net/dev/api/endpoints/1)

---

### Project Endpoints
All of the project related functions require a project `id`.

```javascript
// Get the information and content of a project.  
Be.project(id, (err, res, data) => {
  console.dir(data);
});

// Get the comments for a project.   
Be.projectComments(id, (err, res, data) => {
  console.dir(data);
});
```

### id
Type: `Number` (required)

---

### Users Endpoint
Search for users.  

```javascript
Be.users(opts, (err, res, data) => {
  console.dir(data);
});
```

#### opts
Type: `Object`  
For a list of options see [Users Endpoint](https://www.behance.net/dev/api/endpoints/2)

---

### User Endpoints
All of the user related functions require a user `id` or username.

```javascript
// Get basic information about a user.
Be.user(id, (err, res, data) => {
  console.dir(data);
});

// Get the projects published by a user.  
Be.userProjects(id, opts, (err, res, data) => {
  console.dir(data);
});

// Get the works-in-progress published by a user.  
Be.userWips(id, opts, (err, res, data) => {
  console.dir(data);
});

// Get a list of user's recently appreciated projects.  
Be.userApprecitations(id, opts, (err, res, data) => {
  console.dir(data);
});

// Get a list of a user's collections.  
Be.userCollections(id, opts, (err, res, data) => {
  console.dir(data);
});

// Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.
Be.userStats(id, (err, res, data) => {
  console.dir(data);
});

// Get a list of creatives who follow the user.  
Be.userFollowers(id, opts, (err, res, data) => {
  console.dir(data);
});

// Get a list of creatives followed by the user.  
Be.userFollowing(id, opts, (err, res, data) => {
  console.dir(data);
});

// A list of the user's professional experience
Be.userWorkExperience(id, (err, res, data) => {
  console.dir(data);
});
```

#### id
Type: `Number` || `String` (required)

#### opts
Type: `Object`  
For a list of options, see [User Endpoints](https://www.behance.net/dev/api/endpoints/2)

---

### Teams Endpoint
Search for teams.  

```javascript
Be.teams(opts, (err, res, data) => {
  console.dir(data);
});
```

#### opts
Type: `Object`  
This is an undocumented endpoint.

---

### Team Endpoints
All of the team related functions require a team `id` or username.

```javascript
// Get basic information about a team.
Be.team(id, (err, res, data) => {
  console.dir(data);
});

// Get the projects published by a team.  
Be.teamProjects(id, opts, (err, res, data) => {
  console.dir(data);
});
```

#### id
Type: `Number` (required)

#### opts
Type: `Object`  
This is an undocumented endpoint.

---

### Collections Endpoint
Search for collections.  

```javascript
Be.collections(opts, (err, res, data) => {
  console.dir(data);
});
```

#### opts
Type: `Object`  
For a list of options, see [Collections Endpoint](https://www.behance.net/dev/api/endpoints/5)

---

### Collection Endpoints
All collection related functions require a collection `id`

```javascript
// Get basic information about a collection.
Be.collection(id, (err, res, data) => {
  console.dir(data);
});

// Get projects from a collection.  
Be.collectionProjects(id, opts, (err, res, data) => {
  console.dir(data);
});
```

#### id
Type: `Number` (required)

#### opts
Type: `Object`  
For a list of options, see [Collections Endpoint](https://www.behance.net/dev/api/endpoints/5)

---

### Creatives To Follow Endpoint
Provides a list of creatives you might be interested in following.  

```javascript
Be.creativesToFollow(opts, (err, res, data) => {
  console.dir(data);
});
```

#### opts
Type: `Object`  
For a list of options, see [Creatives to Follow Endpoint](https://www.behance.net/dev/api/endpoints/9)

---

### Creative Fields Endpoint
Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')

```javascript
Be.fields((err, res, data) => {
  console.dir(data);
});
```

---