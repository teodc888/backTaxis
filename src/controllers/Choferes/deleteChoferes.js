const {Choferes} = require("../../db.js");

async function deleteChoferess(req, res, next) {
    try{
        const {id} = req.body;
        const deleteChofer = await Choferes.destroy({
            where: {
                id: id
            }
        });
        if(deleteChofer === 0){
            return res.status(404).send("No se ha encontrado el chofer");
        }else{
        return res.status(200).send("Chofer eliminado");
        }
    }catch(err){
        next(err);
    }
}

module.exports = {deleteChoferess};
