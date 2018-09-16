const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").option({
    direccion: {
        alias: "d",
        desc: "Dirección de la ciudad para obtener el clima",
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(mensaje => { console.log(mensaje); })
    .catch(e => { console.log(e); });

lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
        console.log(resp.direccion);
        console.log(resp.lat);
        console.log(resp.lng);
    })
    .catch(e => { console.log(e); });

clima.getClima(39.1511854, -0.4333643)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => { console.log(e); });