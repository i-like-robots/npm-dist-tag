const semver = require('semver')

module.exports = function getDistTag(newVersion, highestVersion) {
  const prerelease = semver.prerelease(newVersion)
  const comparison = semver.compare(newVersion, highestVersion)

  if (comparison === 1 && prerelease) {
    return 'next'
  }

  if (comparison === 1) {
    return 'latest'
  }

  if (comparison === -1) {
    const major = semver.major(newVersion)
    return `v${major}-maintenance`
  }

  throw Error(`No appropriate distribution tag for "${newVersion}" could be found`)
}
