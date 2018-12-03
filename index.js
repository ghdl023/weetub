// const express = require("express");
import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);


const handleRoot = (req,res)=> res.send('Hello, from my home!!');

const handleProfile = (req,res)=> res.send("You are on my profile");

app.get("/", handleRoot);

app.get("/profile", handleProfile);

app.listen(PORT, handleListening);
