const {FlighService} = require('../services/index')

const flightService = new FlighService()

const create = async (req,res) => {
    try{
        //flightData Object is just created to Make sure we are sending only required values to db
        const flightData = {
            flightNumber :  req.body.flightNumber ,
            airplaneId : req.body.airplaneId ,
            arrivalAirportId : req.body.arrivalAirportId ,
            departureAirportId : req.body.departureAirportId, 
            arrivalTime : req.body.arrivalTime ,
            departureTime : req.body.departureTime, 
            price : req.body.price

        }
        const flight = await flightService.createFlight(flightData)
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully Created the flight",
            err: {} 
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not crete the flight",
            err: error
        })

    }


}

const getAll = async (req,res) => {
    try{
        const flight = await flightService.getAllFlightData(req.query)
        return res.status(201).json({
            data: flight,
            success: true,
            message: "Successfully found the flight",
            err: {} 
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not find the flight",
            err: error
        })

    }

}

module.exports = { 
    create,
    getAll
}