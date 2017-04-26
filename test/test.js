/* eslint-env mocha */
'use strict'

// Dependencies
const rewire = require('rewire')
const nock = require('nock')
const expect = require('chai').expect
const Behance = rewire('../index.js')

// Create an Instance of Behance API with fake key
const key = 123456789
const Be = new Behance(key)

// Sample Data Sets
const userProjectsData = require('./api-responses/userProjects.json')
const fieldsData = require('./api-responses/fields.json')
const projectsData = require('./api-responses/projects.json')
const projectData = require('./api-responses/project.json')

// Test Private Functions
describe('behance-api: private functions', function () {
  // Rewire private functions
  const _requestHandler = Behance.__get__('requestHandler')
  const _requestUrl = Behance.__get__('requestUrl')
  const _compareKeys = Behance.__get__('compareKeys')

  // requestHandler
  describe('requestHandler', function () {
    it('Throw Error when API returns forbidden', function (done) {
      _requestHandler('https://api.behance.net/v2/projects?q=motorcycle?client_id=' + key, function (err) {
        expect(err).to.be.an('error')
        done()
      })
    })
  })

  // requestUrl
  describe('requestUrl', function () {
    it('Create a valid url from endpoint and query inputs', function (done) {
      const result = _requestUrl('projects', key, {q: 'motorcycle', time: 'month'})
      expect(result).to.equal('https://api.behance.net/v2/projects?q=motorcycle&time=month&client_id=' + key)
      done()
    })
  })

  // compareKeys
  describe('compareKeys', function () {
    it('Succeed with valid keys', function (done) {
      const result = _compareKeys({sort: ''}, {q: '', sort: ''}, 'Test Function')
      expect(result).to.be.true
      done()
    })

    it('Error on invalid keys', function (done) {
      const fn = function () { _compareKeys({q: ''}, {sort: ''}, 'Test Function') }
      expect(fn).to.throw(Error)
      done()
    })
  })
})

// Test Public Functions
describe('behance-api: public functions', function () {
  // new Behance();
  describe('new Behance()', function () {
    it('Error without an API key', function (done) {
      const fn = function () { const Beh = new Behance() }
      expect(fn).to.throw(Error)
      done()
    })
  })

  // Be.fields()
  describe('Be.fields -- Endpoint for Fields', function () {
    before(function () {
      nock('https://api.behance.net')
        .get('/v2/fields')
        .query({client_id: key})
        .reply(200, fieldsData)
    })

    it('Response contains field and popular arrays', function (done) {
      Be.fields(function (err, res, data) {
        if (err) throw err
        expect(data).to.have.property('fields')
        expect(data).to.have.property('popular')
        done()
      })
    })
  })

  // Be.projects()
  describe('Be.projects -- Endpoints that only accept Options', function () {
    before(function () {
      nock('https://api.behance.net')
        .get('/v2/projects')
        .query({q: 'motorcycle', client_id: key})
        .reply(200, projectsData)
    })

    it('Response contains projects array', function (done) {
      Be.projects({q: 'motorcycle'}, function (err, res, data) {
        if (err) throw err
        expect(data).to.have.property('projects')
        done()
      })
    })
  })

  // Be.project()
  describe('Be.project -- Endpoints that require an ID', function () {
    before(function () {
      nock('https://api.behance.net')
        .get('/v2/projects/4889175')
        .query({client_id: key})
        .reply(200, projectData)
    })

    it('Response contains a specific projects information', function (done) {
      Be.project('4889175', function (err, res, data) {
        if (err) throw err
        expect(data).to.have.property('project')
        expect(data).to.have.deep.property('project.id', 4889175)
        done()
      })
    })

    it('Error when no ID is provided', function (done) {
      const fn = function () {
        Be.project(function (err, res, data) {
          if (err) throw err
        })
      }
      expect(fn).to.throw(Error)
      done()
    })
  })

  // Be.userProjects()
  describe('Be.userProjects -- Endpoint that requires an ID, Options, and a CB', function () {
    before(function () {
      nock('https://api.behance.net')
        .get('/v2/users/edmendoza3/projects')
        .query({sort: 'appreciations', client_id: key})
        .reply(200, userProjectsData)
    })

    it('Response contains a users project list', function (done) {
      Be.userProjects('edmendoza3', {sort: 'appreciations'}, function (err, res, data) {
        if (err) throw err
        expect(data).to.have.property('projects')
        done()
      })
    })

    it('Error when no ID is provided', function (done) {
      const fn = function () {
        Be.userProjects({sort: 'appreciations'}, function (err, res, data) {
          if (err) throw err
        })
      }
      expect(fn).to.throw(Error)
      done()
    })
  })
})
