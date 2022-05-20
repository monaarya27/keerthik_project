const express = require ("express");
const router = express.Router();
const ctrl =  require("../controller/student");

router.get("/getAllData", ctrl.getAllData);
router.post("/getAllDetails", ctrl.getAllDetails);
router.post("/getverifyOtp", ctrl.getOtpverify);
router.post("/login/user", ctrl.loginUser);

module.exports = router;