const axios = require('axios');

const getLugarLatLon = async (direccion) => {

    let key = 'AIzaSyBqu2cJwqDIzE-pzVzpETLONrGvEmDAikU';
    let encodeUrl = encodeURI(direccion);
    //console.log(encodeUrl);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=${key}`);
    
    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }

    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;
    
    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lon: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLon
}