const {Recaudaciones, Choferes} = require("../../db.js");
async function createRD(req, res, next) {
    const {dia,total,montoChofer,gnc,kilometros,gastosExtra,totalGastos,idchofer} = req.body;
    try{
        const newRecaudacion = await Recaudaciones.create({
            dia,
            total,
            montoChofer,
            gnc,
            kilometros,
            gastosExtra,
            totalGastos,
        });

        let dbChoferes = await Choferes.findAll({where:{id: idchofer}});

        if(dbChoferes){
        newRecaudacion.addChoferes(dbChoferes);
        res.status(200).json(newRecaudacion);
        }
        else{
            res.status(404).json({message: "Chofer no encontrado"});
        }


    }catch(error){
        next(error);
    }
}

module.exports = {createRD};