const {CityService} = require('../services/index')

const cityService = new CityService()

const create = async (req,res)=>{
    try{
        const city = await cityService.createCity(req.body)
        return res.status(201).json({
            data: city,
            success: true,
            message: "Successfully Created the city",
            err: {} 
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not crete the city",
            err: error
        })

    }
}

//delete: /city/:id
const destroy = async (req,res)=>{
    try{
        const response = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "Successfully deleted the city",
            err: {} 
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not delete the city",
            err: error
        })

    }
}

//patch:  /city/:id   data : req.body
const update = async (req,res)=>{
    try{
        const city = await cityService.updateCity(req.params.id,req.body)
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully updated the city",
            err: {} 
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not update the city",
            err: error
        })

    }
}

const get = async (req,res)=>{
    try{
        const city = await cityService.getCity(req.params.id)
        return res.status(200).json({
            data: city,
            success: true,
            message: "Successfully found  the city",
            err: {} 
        })

    }catch(error){
        console.log(error)
        return res.status(500).json({
            data: {},
            success: false,
            message: "Could not find the city",
            err: error
        })

    }
}

module.exports = {create,destroy,update,get}