const {Choferess} = require("../../db.js");

async function deleteChoferess(req, res, next) {
    try{
        const choferess = await Choferess.delete({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({choferess});
    }catch(err){
        next(err);
    }
}

module.exports = {deleteChoferess};
