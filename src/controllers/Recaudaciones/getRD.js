const {Recaudaciones, Choferes} = require("../../db.js");

async function getRD(req, res, next) {
    try{
        const recaudaciones = await Recaudaciones.findAll({
            include: [{
                model: Choferes,
                as: 'choferes'
            }]
        });
        res.status(200).json(recaudaciones);
    }catch(error){
        next(error);
    }
}

module.exports = {getRD};