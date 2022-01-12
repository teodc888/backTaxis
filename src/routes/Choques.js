const { Router } = require("express");
const router = Router();
const {createChoque} = require("../controllers/choques/createChoque.js");
const {getChoques} = require("../controllers/choques/getChoques.js");
const {deleteChoque} = require("../controllers/choques/deleteChoque.js");
router.post("/", createChoque);
router.get("/", getChoques);
router.delete("/", deleteChoque);

module.exports = router;