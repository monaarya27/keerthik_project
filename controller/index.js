const query = require ("../queries/index");

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
            mobileNo : body.mobileNo
        }
        let data =await query.studentDetails(opts);
        return res.send(data)
    }catch(err){
        res.send(err)
    }
}

module.exports = {
    getAllData,
    getAllDetails
}