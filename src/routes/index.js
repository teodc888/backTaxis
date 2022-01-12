const { Router } = require("express");
const express = require("express");
const choferes = require("./Choferes.js");
const Recaudaciones = require("./Recaudaciones.js");
const Choques = require("./Choques.js");
const router = Router();
router.use(express.json());

router.use("/choferes", choferes);
router.use("/recaudaciones", Recaudaciones);
router.use("/choques", Choques);




module.exports = router;
