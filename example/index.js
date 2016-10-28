'use strict';

// Behance Dependencies
var Behance = require('../index.js');

// Create an Instance of Behance with API Key
var key = require('../api.json').key;
var Be = new Behance(key);

var fs = require('fs');

// Get Projects
// Be.projects({q: 'motorcycle'}, function(err, res, data) {
// 	console.dir(data);
// 	fs.writeFile('../test/api-responses/projects.json', JSON.stringify(data, null, 4));
// });

// Get Project
Be.project('4889175', function(err, res, data) {
	// console.dir(data);
	fs.writeFile('../test/api-responses/project.json', JSON.stringify(data, null, 4));
});

// Get Project Comments
// Be.projectComments('4889175', {page: '1'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get Creatives to Follow
// Be.creativesToFollow({page: '1'}, function(err, res, data) {
// 	console.dir(data);
// 	fs.writeFile('../test/api-responses/creativesToFollow.json', JSON.stringify(data, null, 4));
// });

// Get Creative Fields
// Be.fields(function(err, res, data) {
// 	console.dir(data);
// 	fs.writeFile('../test/api-responses/fields.json', JSON.stringify(data, null, 4));
// });

// Get Users
// Be.users({q: 'matia'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get User
// Be.user('edmendoza3', function(err, res, data) {
// 	console.dir(data);
// });

// Get User Projects
// Be.userProjects('edmendoza3', {sort: 'appreciations'}, function(err, res, data) {
// 	console.dir(data);
// 	fs.writeFile('../test/api-responses/userProjects.json', JSON.stringify(data, null, 4));
// });

// Get User Wips
// Be.userWips('edmendoza3', {sort: 'appreciations'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get User Appreciations
// Be.userAppreciations('edmendoza3', {page: '1'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get User Appreciations
// Be.userCollections('edmendoza3', {page: '1'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get User Stats
// Be.userStats('edmendoza3', function(err, res, data) {
// 	console.dir(data);
// });

// Get User Followers
// Be.userFollowers('edmendoza3', {page: '1'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get User Following
// Be.userFollowing('edmendoza3', {page: '1'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get User Work Experience
// Be.userWorkExperience('edmendoza3', function(err, res, data) {
// 	console.dir(data);
// });

// Get Collections
// Be.collections({q: 'candy'}, function(err, res, data) {
// 	console.dir(data);
// });

// Get Collection
// Be.collection('9866', function(err, res, data) {
// 	console.dir(data);
// });

// Get Collection Project Info
// Be.collectionProjects('9866', {time: 'month'}, function(err, res, data) {
// 	console.dir(data);
// });