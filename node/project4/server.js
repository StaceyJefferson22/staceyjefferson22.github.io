const express = require("express");
const app = express();
const Joi = require("joi");
app.use(express.static("public"));
app.use(express.json());


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

let recipes = [
    { id: 1, name: "Banana Bread", description: "Extra soft and bannanny" },
    {
        id: 2,
        name: "Chocolate Chip Cookies",
        description: "Very chocolately cookies",
    },
    { id: 3, name: "Vanilla Cake", description: "Real vanilla been in a cake" },
];

app.get("/api/recipes", (req,res) =>{
    res.send(recipes);
});

app.listen(3000, () => {
    console.log("I'm listening");
});