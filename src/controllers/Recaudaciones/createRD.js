const {Recaudaciones, Choferes} = require("../../db.js");
async function createRD(req, res, next) {
    const {dia,neto,gnc,kilometros,montoChofer,gastosExtra,idchofer} = req.body;
    try{
        const newRecaudacion = await Recaudaciones.create({
            dia,
            neto,
            gnc,
            kilometros,
            gastosExtra,
            montoChofer: neto * 0.35,
            total:neto - (neto * 0.35) - gnc  - gastosExtra ,
        });

        let dbChoferes = await Choferes.findAll({where:{id: idchofer}});


        if(dbChoferes.length > 0){
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