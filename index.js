const express = require("express");
const chat = require("./models/chat");
const path = require("path");
const methodOvr = require("method-override");
const mongoose = require("mongoose");


const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOvr("_method"));


app.listen(port, () => {
    console.log("Servr is running on port: ", port);
});

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected to mongodb!'))
  .catch(err => console.log("Error in mongodb connection: ", err));

app.get("/chats", async (req, res) => {
    let chats =  await chat.find({});
    // console.log(chats);
    res.render("chats", {chats});

});

app.get("/chats/:id", async (req, res) => {
    let {id} = req.params;
    
    try{
        let chatt = await chat.findById(id);
        console.log(chatt);
        res.render("edit.ejs", {chatt});
    }
    catch(err){
        console.log(err);
    }

});


