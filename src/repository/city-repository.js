const {City} = require('../models/index')

class CityRepository{
    async createCity({ name }){
        try{
             const city = await City.create({name})
             return city;
        }catch(error){
            console.log("error at repository layer")
            throw {error};
        }
    }

    async deleteCity({ cityId }){
        try{
           await City.destroy({
                where:{
                    id: cityId
                }
            })
            return true
        }catch(err){
            console.log("error at repository layer")
            throw {error};
        }

    }

    async updateCity({cityId,data}){
        try{
            const city = City.update(data,{
                where: {
                    id: cityID
                }
            })
            return city

        }catch(error){
            console.log("error at repository layer")
           throw {error}
        }
    }

    async getCity({cityId}){
        try{
            const city = City.findByPk(cityId)
            return city;
        }catch(error){
            console.log("error at repository layer")
           throw {error}
        }
    }
}

module.exports = CityRepository