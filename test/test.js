'use strict';

// Dependencies
const 
	rewire = require('rewire'),
	nock = require('nock'),
	expect = require('chai').expect,
	Behance = rewire('../index.js');

// Create an Instance of Behance API with fake key
const 
	key = 123456789,
	Be = new Behance(key);

// Sample Data Sets
const 
	userProjectsData = require('./api-responses/userProjects.json'),
	fieldsData = require('./api-responses/fields.json'),
	projectsData = require('./api-responses/projects.json'),
	projectData = require('./api-responses/project.json');

// Begin Tests
describe('behance-api', function() {

	describe('Private', function() {
		/**
		 * requestHandler
		 * @private
		 */
		describe('requestHandler', function() {
			var _requestHandler = Behance.__get__('requestHandler');
			/**
			 * Should Throw an Error
			 */
			 it('Throw Error when API returns forbidden', function(done) {
			 	_requestHandler('https://api.behance.net/v2/projects?q=motorcycle?client_id=' + key, function(err) {
			 		expect(err).to.be.an('error');
			 		done();
			 	});
			});
		});

		/**
		 * requestUrl
		 * @private
		 */
		describe('requestUrl', function() {
			/**
			 * Validate that the url structure matches what the Behance API will expect.
			 */
			it('Should create a valid url from endpoint and query inputs', function(done) {
				var _requestUrl = Behance.__get__('requestUrl');
				var result = _requestUrl('projects', key, {q: 'motorcycle', time: 'month'});
				expect(result).to.equal('https://api.behance.net/v2/projects?q=motorcycle&time=month&client_id=' + key);
				done();
			});
		});

		/**
		 * compareKeys
		 * @private
		 */
		describe('compareKeys', function() {
		 	var _compareKeys = Behance.__get__('compareKeys');
			/**
			 * Return true when keys are all valid
			 */
			 it('Return true when keys are valid', function(done) {
			 	var result = _compareKeys({sort:""}, {q: "", sort: ""}, 'Test Function');
			 	expect(result).to.be.true;
			 	done();
			 });

			 /**
			  * Return false when key shouldn't be found
			  */
			 it('Throw error when keys are invalid', function(done) {
			 	var fn = function() { _compareKeys({q: ""}, {sort: ""}, 'Test Function'); }
			 	expect(fn).to.throw(Error);
			 	done();
			 });
		});
	});

	describe('Public', function() {

		/**
		 * Instantiate Behance without a Key
		 */
		describe('new Behance()', function() {
			it('Throw an error when no API key is given', function(done) {
				var fn = function() { var Beh = new Behance(); }
				expect(fn).to.throw(Error);
				done();
			});
		});

		/**
		 * Be.fields
		 * @public
		 */
		describe('Be.fields (Endpoint for Fields)', function() {
		  	beforeEach(function() {
		  		nock('https://api.behance.net')
		  			.get('/v2/fields')
		  			.query({client_id: key})
		  			.reply(200, fieldsData);
		  	});
		  	/**
		  	 * Test that fields responds Correctly
		  	 */
		  	it('Return an object that contains field and popular arrays', function(done) {
		  		Be.fields(function(err, res, body) {
		  			expect(body).to.have.property('fields');
		  			expect(body).to.have.property('popular');
		  			done();
		  		});
		  	});
		});

		/**
		 * Be.projects
		 * Note: Using Be.projects but this should cover all endpoints that only accept Options
		 * @public
		 */
		describe('Be.projects -- Endpoints that only accept Options', function() {
		  	beforeEach(function() {
		  		nock('https://api.behance.net')
		  			.get('/v2/projects')
		  			.query({q: 'motorcycle', client_id: key})
		  			.reply(200, projectsData);
		  	});
		  	/**
		  	 * Test that endpoints that use options respond correctly
		  	 */
		  	it('Return an object that contains projects array', function(done) {
		  		Be.projects({q: 'motorcycle'}, function(err, res, body) {
		  			expect(body).to.have.property('projects');
		  			done();
		  		});
		  	});
		});

		/**
		 * Be.project
		 * Note: Using Be.project but this should cover all endpoints that only accept an ID
		 * @public
		 */
		 describe('Be.project -- Endpoints that require an ID', function() {
		  	beforeEach(function() {
		  		nock('https://api.behance.net')
		  			.get('/v2/projects/4889175')
		  			.query({client_id: key})
		  			.reply(200, projectData);
		  	});
		  	/**
		  	 * Test that endpoints with IDs respond correctly
		  	 */
		  	it('Return an object that contains a specific projects information', function(done) {
		  		Be.project('4889175', function(err, res, body) {
		  			expect(body).to.have.property('project');
		  			expect(body).to.have.deep.property('project.id', 4889175);
		  			done();
		  		});
		  	});
		  	/**
		  	 * Test that an Error is thrown when no ID is provided
		  	 */
		  	 it('Throw an error when no ID is provided', function(done) {
		  	 	var fn = function() { Be.project(function(err, res, body){}); }
		  	 	expect(fn).to.throw(Error);
		  	 	done();
		  	 });
		});

		 /**
		 * Be.userProjects
		 * Note: Using Be.userProjects but this should cover all endpoints that require both an ID and Options
		 * @public
		 */
		describe('Be.userProjects -- Endpoint that require at least an ID and have Options', function() {
		  	beforeEach(function() {
		  		nock('https://api.behance.net')
		  			.get('/v2/users/edmendoza3/projects')
		  			.query({sort: 'appreciations', client_id: key})
		  			.reply(200, userProjectsData);
		  	});
		  	/**
		  	 * Test that endpoints with IDs and Options respond correctly
		  	 */
		  	it('Return an object that contains a users project list', function(done) {
		  		Be.userProjects('edmendoza3', {sort: 'appreciations'}, function(err, res, body) {
		  			expect(body).to.have.property('projects');
		  			done();
		  		});
		  	});
		});
	});
});