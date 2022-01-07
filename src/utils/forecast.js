const request = require('request')

// const forecast = (latitude, longitude ,callback) => {
//     // 37.8267,-122.4233
//     const url = 'http://api.weatherstack.com/current?access_key=9ce7ba287e15b8e0c88589c4188833ce&query=' + latitude + ',' + longitude + '&units=f'
//     request({url: url, json:true}, (error, response) => {
//     if (error) {
//         callback('Unable to connect to weather services!', undefined)
//     } else if (response.body.error === 0) {
//         callback('Unable to find location.', undefined)
//     } else {
//         callback(undefined, response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature + " degress out. There is " + response.body.current.precip + "% chance of rain.")
//         }
        
//     })
// }


// REFACTORED
const forecast = (latitude, longitude ,callback) => {
    // 37.8267,-122.4233
    const url = 'http://api.weatherstack.com/current?access_key=9ce7ba287e15b8e0c88589c4188833ce&query=' + latitude + ',' + longitude + '&units=f'
    request({url, json:true}, (error, { body }) => {
    if (error) {
        callback('Unable to connect to weather services!', undefined)
    } else if (body.error === 0) {
        callback('Unable to find location.', undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out. The Humidity is " + body.current.humidity + "%. There is " + body.current.precip + "% chance of rain.")
        }
        
    })
}

module.exports = forecast