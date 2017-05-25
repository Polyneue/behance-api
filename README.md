# behance-api
<img src="https://raw.githubusercontent.com/Polyneue/behance-api/master/behance-api-logo.png" width="90px" />

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
const Behance = require('behance-api');
const Be = new Behance(API_KEY);

// Get Projects Data
Be.projects({q: 'motorcycle'}, function (err, res, data) {
  if (err) throw err;

  // Do something with the data received from the API
  console.dir(data);
});
```

The snippet above will make a request to the Behance API and receive the first page of results that match the `motorcycle` query for the `/projects/` endpoint. It then displays that data in the terminal. Every callback gets three arguments; an error (if there is one), the HTTP response, and a JSON object.

## API  
For documentation around accessing all of the endpoints, see [API Docs](https://github.com/Polyneue/behance-api/blob/master/docs/API.md)

## License  
MIT