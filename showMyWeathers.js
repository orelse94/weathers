const keys = require('./params.js').retParams()
const showWeather = require('./weather.js').adToWeather
const getWeathers = () => {
  const myLocs = require('./locations.js').retLocs()
  let allAddrsWeathers = {}
  for (let [type,address] of Object.entries(myLocs)) {
    allAddrsWeathers[type] = showWeather(address, keys.googleKey, keys.apiKey)
  }
  return allAddrsWeathers
}

// getWeathers()

module.exports = {
  getWeathers,
}
