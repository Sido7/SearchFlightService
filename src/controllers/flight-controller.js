const {FlighService} = require('../services/index')

const flightService = new FlighService()

const create = async (req,res) => {
    try{
        const flight = await flightService.createFlight(req.body)
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

module.exports = {create}