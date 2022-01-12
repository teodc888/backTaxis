const {
    Choferes,
    Choques
} = require("../../db.js");

async function createChoque(req, res, next) {
    const {
        dia,
        fotos,
        seguro,
        poliza,
        nombre,
        apellido,
        dni,
        telefono,
        placa,
        marca,
        chofer
    } = req.body;
    try {
        const newChoque = await Choques.create({
            dia,
            fotos,
            seguro,
            poliza,
            nombre,
            apellido,
            dni,
            telefono,
            placa,
            marca,

        });
        let dbChoferes = await Choferes.findAll({
            where: {
                id: chofer
            }
        });
        if (dbChoferes.length > 0) {
            newChoque.addChoferes(dbChoferes);
            res.status(200).json(newChoque);
        } else {
            res.status(404).json({
                message: "Chofer no encontrado"
            });
        }

    } catch (error) {
        next(error);
    }
}

module.exports = {
    createChoque
};