const express = require("express");
const app = express();

const PORT = 4000;

function handleListening(){
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleRoot(req,res){
    console.log("Hi from home!!");
    console.log(req);
    res.send('Hello, from home!!');
}

function handleProfile(req,res){
    res.send("You are on my profile");
}

app.get("/", handleRoot);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
