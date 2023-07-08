module.exports = async function getRegistryData(packageName) {
  const response = await fetch(`https://registry.npmjs.com/${packageName}`)

  if (response.ok) {
    return response.json()
  } else {
    throw Error(`The npm registry responded with a ${response.status}`)
  }
}
