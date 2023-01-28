const {FlighService} = require('../services/index')
const {SuccessCodes} = require('../util/error-Codes')

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
        return res.status(SuccessCodes.CREATED).json({
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
        console.log("from getall",req.params)
        const flight = await flightService.getAllFlightData(req.query)
        return res.status(SuccessCodes.OK).json({
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

const getOne = async (req,res)=>{
    try{
        const flight = await flightService.getFlight(req.params.id)
        return res.status(200).json({
            data: flight,
            message: "successfully found the flight",
            err: {}
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            message: "could not find the flight with given id",
            err: error
        })
    }
}

const update = async (req,res)=>{
    try{
        const response = await flightService.updateFlight(req.params.id,req.body)
        return res.status(200).json({
            data: response,
            message: "successfully updated the flight",
            err: {}
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            message: "could not update the flight with given id",
            err: error
        })
    }
}

module.exports = { 
    create,
    getAll,
    getOne,
    update
}