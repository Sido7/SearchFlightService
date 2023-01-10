const {ClientErrorCodes} = require('../util/error-Codes')
const validateCreateFlight = (req,res,next) => {
    if(!req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.arrivalAirportId ||
        !req.body.departureAirportId ||
        !req.body.arrivalTime ||
        !req.body.departureTime ||
        !req.body.price){

            //if any of the body params is missing we come inside the if loop
    return res.status(ClientErrorCodes.BAD_REQUEST).json({
                data: {},
                message: {},
                success: false,
                message: "Invalid Request Body to Create Flight",
                err: "Missing Mandatory Properties to create a flight"
            });
        console.log("hit the middleware")
        
    }
    next()
}


module.exports = {validateCreateFlight}