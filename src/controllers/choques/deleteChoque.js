const {Choques} = require("../../db.js");

async function deleteChoque(req, res, next) {
    try{
        const {id} = req.body;
        const deletechoques = await Choques.destroy({
            where: {
                id: id
            }
        });
        if(deletechoques === 0){
            return res.status(404).send("No se ha encontrado el choque");
        }else{
            return res.status(200).send("Choque eliminado");

        }
    }catch(err){
        next(err);
    }
}

module.exports = {deleteChoque};