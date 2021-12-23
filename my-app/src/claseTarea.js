/* Clase medio de transporte
    medio de transporte (transportWay) aéreo, marítimo, terrestre, ferroviario
    modo de transporte (transportMode) automóvil, camión, avión, tren, barco, etc
    tipo de transporte (typeTransport) de pasajeros, de carga

*/

class Conveyance {
    constructor(transportWay, transportMode, classification) {
        this.transportWay = transportWay;
        this.transportMode = transportMode;
        this.classification = classification;
    }
}

class TerrestrialTransport extends Conveyance {
    constructor(transportMode, classification, propulsionMethod, numWheels, numMaxPassengers ) {
        super("terreste", transportMode, classification);
        this.propulsionMethod = propulsionMethod;
        this.numWheels = numWheels;
        this.numMaxPassengers = numMaxPassengers;
    }
}

class Car extends TerrestrialTransport {
    constructor(transportMode, classification, propulsionMethod, numWheels, numMaxPassengers, brand, subBrand) {
        super("automovil", classification, propulsionMethod, numWheels, numMaxPassengers);
        this.brand = brand;
        this.subBrand = subBrand;
    }

}

const carro = new TerrestrialTransport("autormovil", "pasajeros", "hibrido", 4, 5);

