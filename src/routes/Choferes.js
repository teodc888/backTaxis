const { Router } = require("express");
const router = Router();
const {createChofer} = require("../controllers/Choferes/createChofer");
const {getChoferes} = require("../controllers/Choferes/getChoferes");
const {deleteChoferess} = require("../controllers/Choferes/deleteChoferes");
router.post("/", createChofer);
router.get("/", getChoferes);
router.delete("/", deleteChoferess);

module.exports = router;
