
const argv = require('./config/yargs').argv;

const { getLugarLatLon } = require('./controllers/lugar.controller');
const { getClima } = require('./controllers/clima.controller');

let getInfo = async (direccion) => {

    try {
        let lugar = await getLugarLatLon(direccion);
        let clima = await getClima(lugar.lat, lugar.lon);

        return `El clima en ${lugar.direccion} es de ${clima.temperatura}°.`
        
    } catch (error) {
        return `No se puedo determinar el clima en ${direccion}.`
    }
}

getInfo(argv.direccion)
        .then( (resp) => console.log(resp) )
        .catch( (e) => console.log(e) );