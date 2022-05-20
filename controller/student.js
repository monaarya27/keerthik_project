const query = require ("../queries/student");
const jwt = require('jsonwebtoken');

const getAllData = async function(req, res){
    try{
        let data = await query.getData();
        return res.send(data);
    }
    catch(err){
        res.send(err)
    }
}

const getAllDetails = async function(req, res){
    try {
        const body = req.body;
        const opts = {
            id : body.id,
            studentName: body.studentName,
            studentId : body.studentId,
            class : body.class,
            mobileNo : body.mobileNo,
            otp : body.otp,
            password : body.password
        }
        let data =await query.studentDetails(opts);
        return res.send({otp:"9536"})
        // return res.send(data)
    }catch(err){
        res.send(err)
    }
}


const getOtpverify = async(req, res) => {
    try{
        let data = await query.verifyOtp(req.body);
        if(req.body.otp=="9536"){
            return("otp verified")
        }
        else{
            console.log("incorrect otp")
        }
    }catch(err){
        console.log(err);
        res.send(err)
    }
}


const loginUser = async(req, res) => {
    try{
        const currentMobileNo = await query.getUserBymobileNo(req.body);
        if (currentMobileNo){
            let accessToken = jwt.sign({currentMobileNo},"access",{expiresIn:'50s'});
            return res.send(accessToken)
    

        }else{
            res.send("error in login")
        }
    }catch(err){
        console.log(err)
        res.send(err)
    }
}

module.exports = {
    getAllData,
    getAllDetails,
    getOtpverify,
    loginUser
}