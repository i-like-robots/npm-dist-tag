# npm-dist-tag

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/i-like-robots/npm-dist-tag/blob/master/LICENSE) [![Build Status](https://travis-ci.org/i-like-robots/npm-dist-tag.svg?branch=master)](https://travis-ci.org/i-like-robots/npm-dist-tag) [![npm version](https://img.shields.io/npm/v/npm-dist-tag.svg?style=flat)](https://www.npmjs.com/package/npm-dist-tag)

A small tool to find the appropriate [npm distribution tag][1] when publishing a new version of your package.

[1]: https://docs.npmjs.com/adding-dist-tags-to-packages

```sh
$ npx npm-dist-tag
```


## Installation

This is a [Node.js] module available through the [npm] registry. Before installing, download and install Node.js. Node.js 12 or higher is required.

Installation is done using the [npm install] command:

```sh
$ npm install --save-dev npm-dist-tag
```

[Node.js]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[npm install]: https://docs.npmjs.com/getting-started/installing-npm-packages-locally


## Usage

This tool fetches data about a package from the npm registry and compares its new version with those already published. By default the package name and new version will be loaded from `package.json` in the current working directory. The tool can be used via its command line interface or Node.js API and will return one of three values:

  - `"latest"` if the new version is greater than the highest version on the registry.

  - `"maintenance"` if the new version is older than the highest version on the registry.

  - `"pre-release"` if the new version has a pre-release identifier.


### Command line interface

When the command runs successfully it will write the distribution tag to `stdout`. If the command fails it will exit with a non-zero code and write the error message to `stderr`.

The package name and version can be provided to the tool as options:

```sh
$ npx npm-dist-tag --package "<name>" --version "<semver>"
```


### Node interface

This package provides one function which returns a promise. The promise will either resolve with the distribution tag when successful or reject with an error if it fails:

The `package` name and new `version` can be provided as options:

```js
const npmDistTag = require('npm-dist-tag')

npmDistTag({
  package: '<name>',
  version: '<semver>'
})
  .then((tag) => {
    console.log(tag)
  })
  .catch((error) => {
    console.error(error)
  })
```


## Example

To ensure the `npm publish` command is only run when a valid distribution tag can be found you can use the following shell script:

```sh
DIST_TAG=$(npx npm-dist-tag)

if [[ $DIST_TAG ]]; then
  npm publish --dist-tag=$DIST_TAG;
fi
```


### License

This package is MIT licensed.
