const semver = require('semver')

module.exports = function getHighestVersion(registryData) {
  const allVersions = Object.keys(registryData.versions)
  const stableVersions = allVersions.filter((v) => !semver.prerelease(v))

  return semver.sort(stableVersions).pop()
}
