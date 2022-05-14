// const db = require("../../models/");
const db = require("../models")

const getData = async()=>{
    return await db.students.findAll();
};


const studentDetails = async(opts)=>{
    console.log("aaaaaaaaaa",opts)
    return await db.students.create(opts);

};

module.exports={
    getData,
    studentDetails

};