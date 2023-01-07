const {Flight} = require('../models/index')
const {Op} = require('sequelize')

class FlightRepository{
    
    #createFilter(data){
        const filter = {}
        if(data.departureAirportId)
        {
            filter.departureAirportId = data.departureAirportId
        }
        if(data.arrivalAirportId)
        {
            filter.arrivalAirportId = data.arrivalAirportId
        }
        const priceFilter = []
        if(data.minPrice)
        {
            priceFilter.push({[Op.gte]: data.minPrice})
        }
         if(data.maxPrice)
         {
             priceFilter.push({[Op.lte]: data.maxPrice})
         }
         Object.assign(filter,{price: {[Op.and]: priceFilter}})
        console.log(filter)
        return filter
    }
    async createFlight(data){
        try{
        const flight = Flight.create(data)
        return flight
        }catch(error){
            console.log("error at repository level,could not find airplane capacity")
            throw {error}
        }
    }

    async getFlight(flightId){
        try{
            const flight = await Flight.findById(flightId)
            return flight;
        }catch(error){
            console.log("Not able to get a particular Flight at Repository Layer")
            throw{error}
        }
    }

    async getAllFlight(data){
        try{
            const filterObject = await this.#createFilter(data)
            const flights = await Flight.findAll({
                where : filterObject
            })
            return flights

        }catch(error){
            console.log("Not able to get Flights at Repository level")
            throw{error}
        }
    }
}

module.exports = FlightRepository

//How Query Looks Like

/*
{
    where:{
        arrivalAirportId : 2
        departureAirportId : 3
        price:{ [Op.gte]: [{[Op.gte]:data.minPrice},{[Op.lte]:data.maxPrice}]
        }
    }
}
*/