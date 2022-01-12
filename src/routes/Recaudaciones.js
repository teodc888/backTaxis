const { Router } = require("express");
const router = Router();
const {createRD} = require("../controllers/Recaudaciones/createRD");
const {getRD} = require("../controllers/Recaudaciones/getRD");
const {deleteRD} = require("../controllers/Recaudaciones/deleteRD");
router.post("/", createRD);
router.get("/", getRD);
router.delete("/", deleteRD);


module.exports = router;