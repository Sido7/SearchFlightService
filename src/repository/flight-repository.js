const {Flight} = require('../models/index')

class FlightRepository{
    
    async createFlight(data){
        try{
        const flight = Flight.create(data)
        return flight
        }catch(error){
            console.log("error at repository level,could not find airplane capacity")
            throw {error}
        }
    }
}

module.exports = FlightRepository