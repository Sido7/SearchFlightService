const {Airplane} = require('../models/index')

class AirplaneRepository{

    async getAirplaneCapacity(airplaneId){
        try{
              const capacity = await Airplane.findByPk(airplaneId)
              return capacity;
        }catch(error){
            console.log("getting error at repository layer")
            throw{error}
        }
    }
}

module.exports = AirplaneRepository