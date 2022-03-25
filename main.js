const express = require("express");
const hostname = "127.0.0.1";
const cors = require("cors");
const port = 3000;

const server = express();

server.use(cors());
server.use(express.json());

const getUsers = [
    {
        name:"Emmanuel",
        age:"20",
        address:"Lagos"
    },
    {
        name:"Jammes",
        age:"20",
        address:"Kaduna"
    },
    {
        name:"Stella",
        age:"19",
        address:"Ogun"
    },
    {
        name:"James",
        age:"22",
        address:"Abuja"
    },
    {
        name:"Harry",
        age:"21",
        address:"Lagos"
    } 
]


server.get("/users", function(request,response){    
if(request.query.address != null){
    address = request.query.address;
    address = address.toLowerCase();

    getUsersArray = [];
    for(let i = 0; i < getUsers.length; i++){
        if(getUsers[i]['address'].toLowerCase() == address){
            console.log("Match found")
            
            getUsersArray.push(getUsers[i]);
        }
    }

    response.send(getUsersArray)
}else{
    response.send(getUsers)
}
    
     console.log(response.body);
})




server.post("/submit-registration", function(request,response){

    let first = request.body.first;
    let last = request.body.last;
    let email = request.body.email;
    let password = request.body.password;

    response.send({
        message: "You Have Successfully Registered",

        user_params:{
            firstname : first,
            lastname : last,
            email : email,
            password : password

        }
    })
})

server.listen(port, hostname, function(){
    console.log(`Express Server listening on http://${hostname}:${port}`);
})




//Route

//Home

// server.get("/", function(request,response){
//     console.log(request.path);
//     response.send("This is the home page")
// })


// //About Us
// server.get("/about-us", function(request, response){
//     console.log(request.path);
//     response.send("This is about us page")
// })