const {Choferes, Choques} = require("../../db.js");

async function getChoques(req, res, next) {
    try{
        const choques = await Choques.findAll({
            include: [{
                model: Choferes,
                as: 'choferes'
            }]
        });
        res.status(200).json(choques);
    }catch(error){
        next(error);
    }
}

module.exports = {getChoques};