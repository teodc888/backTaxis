const {Choferes} = require("../../db.js");

async function getChoferes(req, res, next) {
    try{
        const choferes = await Choferes.findAll();
        res.status(200).json(choferes);
    }catch(err){
        next(err);
    }
}

module.exports = {getChoferes};