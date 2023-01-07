const CrudService = require('./crud-service')
const {airportRepository} = require('../repository/index')

class AirportService extends CrudService{
    constructor(){
        const airport = new airportRepository()
        super(airport)
    }

}

module.exports = AirportService