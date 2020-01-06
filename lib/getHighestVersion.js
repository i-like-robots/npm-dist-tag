const semver = require('semver')

module.exports = function getHighestVersion(registryData) {
  const allVersions = Object.keys(registryData.versions)
  return semver.sort(allVersions).pop()
}
