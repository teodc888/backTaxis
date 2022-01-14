const {Recaudaciones} = require("../../db.js");

async function deleteRD(req, res, next) {
    try{
        const {id} = req.query;
        const deleteRecaudacion = await Recaudaciones.destroy({
            where: {
                id: id
            }
        });

        if(deleteRecaudacion === 0){
            return res.status(404).send("No se ha encontrado la recaudacion");
        }else{
        return res.status(200).send("Recaudacion eliminada");
        }
    }catch(err){
        next(err);
    }
}

module.exports = {deleteRD};