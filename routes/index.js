const express = require ("express");
const router = express.Router();
const ctrl =  require("../controller/index");

router.get("/getAllData", ctrl.getAllData);
router.post("/getAllDetails", ctrl.getAllDetails);
module.exports = router;