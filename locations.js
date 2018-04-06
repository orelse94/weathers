const fs = require('fs')
const jsonLoc = './locations.json'

// set locations (CALLED FROM setAddresses.js)

const locFunc = (address,type) => {
  let locations = JSON.parse(fs.readFileSync(jsonLoc,'utf-8').toString())
  // CHANGE OR ADD LOCATIONS
  locations[type] = address
  fs.writeFileSync(jsonLoc, JSON.stringify(locations))
}

const retLocs = () => {
  let myLocations = JSON.parse(fs.readFileSync(jsonLoc,'utf-8').toString())
  return myLocations
}

module.exports = {
  locFunc,
  retLocs,
}
