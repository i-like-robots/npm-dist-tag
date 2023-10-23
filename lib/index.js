const semver = require('semver')
const getDistTag = require('./getDistTag')
const getPackageData = require('./getPackageData')
const getRegistryData = require('./getRegistryData')
const getHighestVersion = require('./getHighestVersion')
const isValidNewVersion = require('./isValidNewVersion')

module.exports = async function npmDistTag(options) {
  const packageName = options.package || getPackageData('name')
  const packageVersion = options.version || getPackageData('version')

  if (packageVersion && packageName) {
    const newVersion = semver.clean(packageVersion)

    if (newVersion) {
      const registryData = await getRegistryData(packageName)

      if (isValidNewVersion(newVersion, registryData)) {
        const highestVersion = getHighestVersion(registryData)
        return getDistTag(newVersion, highestVersion)
      } else {
        throw Error(`The version "${newVersion}" already exists on npm`)
      }
    } else {
      throw Error(`The version "${packageVersion}" could not be parsed as valid semver`)
    }
  } else {
    throw Error('The package name and new version must be specified')
  }
}
