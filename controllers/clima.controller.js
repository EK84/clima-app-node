const axios = require('axios');

const getClima = async (lat, lon) => {

    let apiKey = '72143d074cfc42c3ab4d2a04abd0130d';

    let resp = await axios
                    .get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);

    return {
        temperatura: resp.data.main.temp
    }
}

module.exports = {
    getClima
}

//http: //api.openweathermap.org/data/2.5/weather?lat=35&lon=139&units=metric&appid=72143d074cfc42c3ab4d2a04abd0130d