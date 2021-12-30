const { Router } = require("express");
const router = Router();
const {createChofer} = require("../controllers/Choferes/createChofer");
const {getChoferes} = require("../controllers/Choferes/getChoferes");
router.post("/", createChofer);
router.get("/", getChoferes);

module.exports = router;