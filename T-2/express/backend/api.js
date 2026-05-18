const express = require('express');
const app = express();
const route = express.Router();
const data = [
    {
        id: 1,
        name: 'John Doe',
        branch: 'Computer Science' ,
        city : 'New York'
    },{
        id: 2,
        name: 'John Doe',
        branch: 'Computer Science' ,
        city : 'New York'
    },{
        id: 3,
        name: 'John Doe',
        branch: 'Computer Science' ,
        city : 'New York'
    },{
        id: 4,
        name: 'John Doe',
        branch: 'Computer Science' ,
        city : 'New York'
    }
]
route.get('/',(req,res)=>{
    res.set('Content-Type','text/html');
    for (i of data){
        res.write(`<h1>${i.name} from ${i.city} is in ${i.branch} branch</h1>`);
    }
    res.end();
}
);
route.get('/:id',(req,res)=>{
    var current = data.filter((i)=>i.id == req.params.id);
    if(current.length > 0){
        res.send(current);
    }
    else{
        res.send({message:'No such record found'});
    }
});
module.exports = route;
