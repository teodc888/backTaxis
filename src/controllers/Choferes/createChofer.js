const {Choferes} = require("../../db.js");

async function createChofer(req, res, next) {
    try{
        const {nombre, apellido, documento, telefono, carnet, vencimientoCarnet} = req.body;
        const chofer = await Choferes.create({
            nombre,
            apellido,
            documento,
            telefono,
            carnet,
            vencimientoCarnet
        });
        res.status(201).json({
            message: "Chofer creado",
            chofer
        });

    }catch(err){
        next(err);
    }
}

module.exports = {createChofer};