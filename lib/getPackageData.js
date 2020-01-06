const path = require('path')

module.exports = function getPackageData(field) {
  return require(path.resolve('package.json'))[field]
}
