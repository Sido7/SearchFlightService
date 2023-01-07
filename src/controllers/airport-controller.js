const {AirportService} = require('../services/index')

const airportService = new AirportService()

const createAirport = async (req,res)=>{
    try{
        const airport = await airportService.create(req.body)
        return res.status(201).json({
            data: airport,
            success: true,
            message: "Successfully Created the Airport",
            err: {} 
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not crete the Airport",
            err: error
        })

    }

}

module.exports = {
    createAirport
}