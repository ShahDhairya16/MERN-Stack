// Write an ExpressJS REST API script to create an array of JSON objects named
// employee_data having properties:
// Emp_id
// Name
// Department
// Salary
// Experience
// When the user requests:
// /employees → It should display all employees data.
// /employees/:id → It should display data of the employee whose Emp_id matches the
// given id.
// Example:
// /employees/3 → Display data of employee with Emp_id 3.

const express = require('express');
const app = express();
const route = express.Router();
const ed=[{
    emp_id:1,
    name:'John Doe',
    department:'IT',
    salary:50000,
    experience:2
},
{
    emp_id:2,
    name:'Jane Smith',
    department:'HR',
    salary:60000,
    experience:3
},
{
    emp_id:3,
    name:'Bob Johnson',
    department:'Finance',
    salary:55000,
    experience:4
},
{  
    emp_id:4,
    name:'Alice Brown',
    department:'Marketing',
    salary:45000,
    experience:1}
]

route.get('/emplyoee',(req,res)=>{
    res.json(ed);
})
route.get('/emplyoee/:id',(req,res)=>{
    const data = ed.filter((i)=>i.emp_id===Number(req.params.id));
    if(data.length>0){
        res.send(data);
    }
    else{
        res.send("No Emplyoee data found with the given id");
    }
})

module.exports=route;