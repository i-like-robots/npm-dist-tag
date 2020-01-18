# npm-dist-tag

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/i-like-robots/npm-dist-tag/blob/master/LICENSE) [![Build Status](https://travis-ci.org/i-like-robots/npm-dist-tag.svg?branch=master)](https://travis-ci.org/i-like-robots/npm-dist-tag) [![npm version](https://img.shields.io/npm/v/npm-dist-tag.svg?style=flat)](https://www.npmjs.com/package/npm-dist-tag) [![Greenkeeper badge](https://badges.greenkeeper.io/i-like-robots/npm-dist-tag.svg)](https://greenkeeper.io/)

A small tool to find the appropriate [npm distribution tag][1] when publishing a new version of your package.

[1]: https://docs.npmjs.com/adding-dist-tags-to-packages

```sh
$ npx npm-dist-tag
```


## Installation

This is a [Node.js] module available through the [npm] registry. Before installing, download and install Node.js. Node.js 10 or higher is required.

Installation is done using the [npm install] command:

```sh
$ npm install --save-dev npm-dist-tag
```

[Node.js]: https://nodejs.org/en/
[npm]: https://www.npmjs.com/
[npm install]: https://docs.npmjs.com/getting-started/installing-npm-packages-locally


## Usage

This tool fetches data about a package from the npm registry and compares its new version with those already published. By default the package name and new version will be loaded from `package.json` in the current working directory.

The command will output a string to `stdout`, one of:

  - "latest" if the new version is greater than the highest version on the registry.

  - "maintenance" if the new version is older than the highest version on the registry.

  - "pre-release" if the new version has a pre-release identifier.

If the command fails (such as when the request to the npm registry receives an invalid response or the new version already exists) it will exit with a non-zero code and write the error message to `stderr`.

The package name and version can also be provided as options:

```sh
$ npx npm-dist-tag --package <name> --version <semver>
```

For full usage information run the command with the `--help` flag:

```sh
$ npx npm-dist-tag --help
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
