module.exports = function isValidNewVersion(newVersion, registryData) {
  return registryData.versions[newVersion] ? false : true
}
