const path = require('path')

module.exports = function getPackageData(field) {
  let pkg = {}

  try {
    pkg = require(path.resolve('package.json'))
  } catch (error) {
    console.warn(`package.json could not be loaded`)
  }

  return pkg[field]
}
