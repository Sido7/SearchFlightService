const {flightRepository,airplaneRepository} = require('../repository/index')
const {compareTime} = require('../util/comapare-time')

class flightService {
    constructor(){
        this.airplaneRepository = new airplaneRepository()
        this.flightRepository = new flightRepository()
    }

    async createFlight(data){
        try{
            if(!compareTime(data.arrivalTime,data.departureTime)){
                throw{error: "arrival time cannot be less than departure time"}
            }
            console.log(data)
            const airplane = await this.airplaneRepository.getAirplaneCapacity(data.airplaneId)
            console.log(airplane)
            const flight = await this.flightRepository.createFlight({...data,totalSeats: airplane.capacity})
        return flight;
        }catch(error){
            console.log("error at service Layer,could not create Flight")
            throw{error}
        }
    }

    async getFlight(flightId){
        try{
            const flight = await this.flightRepository.getFlight(flightId)
            return flight;
        }catch(error){
            console.log("Not able to get a particular Flight at Service Layer")
            throw error
        }
    }

    async updateFlight(flightId,data){
        try{
            const respnse = await this.flightRepository.updateFlight(flightId,data)
            return respnse
        }catch(error){
            console.log("Not able to update the Flight at Service Layer")
            throw error
        }

    }

    async getAllFlightData(data){
        try{
            const flight = await this.flightRepository.getAllFlight(data)
            return flight;
        }catch(error){
            console.log("Not able to get all Flight at Service Layer")
            throw{error}
        }

    }

}

module.exports = flightService