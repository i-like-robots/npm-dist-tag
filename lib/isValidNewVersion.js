module.exports = function isValidNewVersion(newVersion, registryData) {
  if (registryData.versions[newVersion]) {
    return Error(`The version "${newVersion}" already exists on npm`)
  }

  return true
}
