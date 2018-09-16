const axios = require("axios");

const getClima = async(lat, lng) => {
    let encodedLat = encodeURI(lat);
    let encodedLng = encodeURI(lng);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodedLat}&lon=${encodedLng}&units=metric&appid=2bcff6c7500a5220778ffff4b2730910`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}