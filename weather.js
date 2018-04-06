const axios = require('axios')
// let apiKey = '8270d167d9cd5171df98d171d865627a'
// let googleKey = 'AIzaSyDMCQShY-Paavc5yOWV-DM_IcnpqbNgP_0'

const addressToGeo = (address,googleKey) => {
  let coordUrl = 'https://maps.googleapis.com/maps/api/geocode/json'
  return axios.get(coordUrl, {
    params: {
      address,
      key: googleKey
    }
  }).then(res => {
    let data = res.data.results[0]
    let geo = data.geometry.location
    return geo
  })
}

const getWeather = (coordObj,apiKey) => {
  let lat = coordObj.lat
  let lon = coordObj.lng
  let owmUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`
  axios.get(owmUrl)
  .then(res => {
    let desc = res.data.weather[0]
    let weather = res.data.main
    console.log({desc,weather})
    return {desc,weather}
  })
}

const adToWeather = (address, googleKey, apiKey) => {
  return addressToGeo(address,googleKey)
  .then(coordObj =>{
    return getWeather(coordObj, apiKey)
  })
}


// adToWeather('67 granit shaarey tikva israel',googleKey,apiKey)
//
module.exports = {
  adToWeather,
}
