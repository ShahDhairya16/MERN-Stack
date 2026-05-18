// Write an ExpressJS script using RESTapi to create one array of json
// object named student_result which have properties like Name,
// Roll_no, Division, Percentage & Grade. Once user request for
// “/result” page it displays all student’s data. If user request for
// particular Roll_no then respective students data will display i.e. if
// user request for “/result/2” then data of Roll_no 2 will display

const express = require('express');
const app = express();
const router=express.Router();

const student_result=[{
    name:'John Doe',
    roll_no:1,
    division:'A',
},
{
    name:'Jane Smith',
    roll_no:2,
    division:'B',
},
{
    name:'Alice Johnson',
    roll_no:3,
    division:'A',
},
{
    name:'Bob Brown',
    roll_no:4,
    division:'C',
}];

router.get('/result',(req,res)=>{
    res.send(student_result);
});
router.get('/result/:roll_no',(req,res)=>{
    var current = student_result.filter((i)=>i.roll_no==req.params.roll_no);
    if(current.length>0){
        res.send(current);
    }
    else{
        res.send('No student found with the given roll number');
    }
});
module.exports=router;