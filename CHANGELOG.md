#Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this project adheres to [Semantic Versioning](http://semver.org/).

## [1.1.1] - 2017-04-19
### Changed
* Minor code style updates in readme
* Fix for behane logo not showing on npmjs.com

## [1.1.0] - 2017-04-19
### Added
* Linting for coding standards (standardjs)
* Added logo per Behance branding guidelines
* `Be.teams()` for the teams endpoint
* `Be.team()` - team endpoint
* `Be.teamProjects()` - team projects endpoint

### Changed
* team endoints added to readme
* updated travis file to only run on develop or master

## [1.0.0] - 2016-11-16
### Added
* Validation for request that use queries.
* Test suite covers 100% of code now.
* Argument validation for endpoints that use an ID and options.
* New Changelog file for better tracking of updates.

### Changed
* Moved requestHandler and requestUrl into the private scope.
* Minor code style changes.
* Changed from querystring module to qs module.
* Test suite structure update.
* Update to README layout for API information.
* Simplified example js file.

## [0.1.2] - 2016-10-28
### Removed
* Removing coverage from npm package.

## [0.1.1] - 2016-10-28
### Removed
* Remove example js from npm package.

## [0.1.0] - 2016-10-28
### Added
* Wrote initial API functions.
* Updated README with new API usage and examples.
* Set up test suite.

## 0.0.2 - 2016-10-26
### Added
* Initial setup of README, Packages, and License for repo and npm.

[1.1.0]: https://github.com/Polyneue/behance-api/compare/v1.1.0...HEAD
[1.0.0]: https://github.com/Polyneue/behance-api/compare/v0.1.2...v1.0.0
[0.1.2]: https://github.com/Polyneue/behance-api/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/Polyneue/behance-api/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/Polyneue/behance-api/compare/v0.0.2...v0.1.0