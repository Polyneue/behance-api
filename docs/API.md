# Behance API Documenation
> This document contains all of the Behance endpoints that are accessible via the behance-api module. For example data from each response, visit the official [API site](https://www.behance.net/dev/api/endpoints/).

### Projects Endpoint
Search for project related data.

**Example:**

```javascript
Be.projects(opts, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| opts | `object` | For a list of possible queries see [Project Endpoint](https://www.behance.net/dev/api/endpoints/1) | No
| callback | `function` | Do something with the response data | Yes

---

### Project Endpoints
Search for project specific data.

**Examples:**

```javascript
// Get the information and content of a project.  
Be.project(id, function (err, res, data) {
  console.dir(data);
});

// Get the comments for a project.   
Be.projectComments(id, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| id | `number` | Id of the project to be requested | Yes |
| callback | `function` | Do something with the response data | Yes |

---

### Users Endpoint
Search for users.

**Example:**

```javascript
Be.users(opts, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | -- |
| opts | `object` | For a list of possible queries see [Users Endpoint](https://www.behance.net/dev/api/endpoints/2) | No 
| callback | `function` | Do something with the response data | Yes

---

### User Endpoints
Search for user related data.

**Examples:**

```javascript
// Get basic information about a user.
Be.user(id, function (err, res, data) {
  console.dir(data);
});

// Get the projects published by a user.  
Be.userProjects(id, opts, function (err, res, data) {
  console.dir(data);
});

// Get the works-in-progress published by a user.  
Be.userWips(id, opts, function (err, res, data) {
  console.dir(data);
});

// Get a list of user's recently appreciated projects.  
Be.userApprecitations(id, opts, function (err, res, data) {
  console.dir(data);
});

// Get a list of a user's collections.  
Be.userCollections(id, opts, function (err, res, data) {
  console.dir(data);
});

// Get statistics (all-time and today) for a specific user. Includes number of project views, appreciations, comments, and profile views.
Be.userStats(id, function (err, res, data) {
  console.dir(data);
});

// Get a list of creatives who follow the user.  
Be.userFollowers(id, opts, function (err, res, data) {
  console.dir(data);
});

// Get a list of creatives followed by the user.  
Be.userFollowing(id, opts, function (err, res, data) {
  console.dir(data);
});

// A list of the user's professional experience
Be.userWorkExperience(id, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| id | `number/string` | Id or username of the requested user | Yes
| opts | `object` | For a list of possible queries see [User Endpoints](https://www.behance.net/dev/api/endpoints/2) | No
| callback | `function` | Do something with the response data | Yes

---

### Teams Endpoint
Search for teams related data  

**Example:**

```javascript
Be.teams(opts, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| opts | `object` | This is an undocumented endpoint, experiment with possible queries | No
| callback | `function` | Do something with the response data | Yes

---

### Team Endpoints
All of the team related functions require a team `id` or username.

**Examples:**

```javascript
// Get basic information about a team.
Be.team(id, function (err, res, data) {
  console.dir(data);
});

// Get the projects published by a team.  
Be.teamProjects(id, opts, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| id | `number` | Id of the requested Team | Yes
| opts | `object` | This is an undocumented endpoint, experiment with possible queries | No
| callback | `function` | Do something with the response data | Yes 

---

### Collections Endpoint
Search for collections.  

**Example:**

```javascript
Be.collections(opts, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| opts | `object` | For a list of possible queries see [Collections Endpoint](https://www.behance.net/dev/api/endpoints/5) | No
| callback | `function` | Do something with the response data | Yes

---

### Collection Endpoints
Get collection related data.

**Examples:**

```javascript
// Get basic information about a collection.
Be.collection(id, function (err, res, data) {
  console.dir(data);
});

// Get projects from a collection.  
Be.collectionProjects(id, opts, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| id | `number` | Id for the collection you are requesting | Yes
| opts | `object` | For a list of possible queries see [Collections Endpoint](https://www.behance.net/dev/api/endpoints/5) | No
| callback | `function` | Do something with the response data | Yes

---

### Creatives To Follow Endpoint
Provides a list of creatives you might be interested in following.  

**Example:**

```javascript
Be.creativesToFollow(opts, function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| opts | `object` | For a list of possible queries see [Creatives to Follow Endpoint](https://www.behance.net/dev/api/endpoints/9) | No
| callback | `function` | Do something with the response data | Yes

---

### Creative Fields Endpoint
Retrieves all Creative Fields in two groups, all fields (in 'fields') and popular ones (in 'popular')

```javascript
Be.fields(function (err, res, data) {
  console.dir(data);
});
```

**Parameters:**

| Parameter | Type | Description | Required |
| --- | --- | --- | --- |
| callback | `function` | Do something with the response data | Yes