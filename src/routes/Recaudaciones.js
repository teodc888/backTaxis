const { Router } = require("express");
const router = Router();
const {createRD} = require("../controllers/Recaudaciones/createRD");
const {getRD} = require("../controllers/Recaudaciones/getRD");
router.post("/", createRD);
router.get("/", getRD);


module.exports = router;