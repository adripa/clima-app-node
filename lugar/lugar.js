const axios = require("axios");

let getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA93Y4H8dLkrSSY9PPfndTeInnrY802Vpc`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultado para ciudad ${direccion}`);
    }

    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }

}

module.exports = {
    getLugarLatLng
}