const semver = require('semver')

module.exports = function getDistTag(newVersion, highestVersion) {
  const prerelease = semver.prerelease(newVersion)

  if (prerelease) {
    return 'pre-release'
  }

  const comparison = semver.compare(newVersion, highestVersion)

  if (comparison === -1) {
    return 'maintenance'
  }

  if (comparison === 1) {
    return 'latest'
  }

  throw Error(`No appropriate distribution tag for "${newVersion}" could be found`)
}
