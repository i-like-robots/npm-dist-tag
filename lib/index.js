const semver = require('semver')
const getDistTag = require('./getDistTag')
const getPackageData = require('./getPackageData')
const getRegistryData = require('./getRegistryData')
const getHighestVersion = require('./getHighestVersion')
const isValidNewVersion = require('./isValidNewVersion')

module.exports = async function(options) {
  const packageVersion = options.version || getPackageData('version')
  const newVersion = semver.coerce(packageVersion)

  if (newVersion) {
    const packageName = options.package || getPackageData('name')
    const registryData = await getRegistryData(packageName)

    if (isValidNewVersion(newVersion, registryData)) {
      const highestVersion = getHighestVersion(registryData)
      return getDistTag(newVersion, highestVersion)
    }
  } else {
    throw Error(`The version "${packageVersion}" could not be parsed as valid semver`)
  }
}
