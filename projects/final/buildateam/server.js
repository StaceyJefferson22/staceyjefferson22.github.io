const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");


const upload = multer({ dest: __dirname + "/public/images" });

mongoose
    .connect(
        "mongodb+srv://sj49:cola@cluster0.fs0waxv.mongodb.net/"
    )
    .then(() => console.log("Connected to mongodb"))
    .catch((error) => console.log("Couldn't connect to mongodb", error));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

const athleteSchema = new mongoose.Schema({
    /* _id: mongoose.SchemaTypes.ObjectId, */
    name:String,
    sport: String,
    description: String,
    awards: [String],
    img: String,
});

const Athlete = mongoose.model("Athlete", athleteSchema);

app.get("/api/athletes", (req,res) => {
    getAthletes(res);
});

const getAthletes = async (res) => {
    const athletes = await Athlete.find();
    res.send(athletes);
};

app.get("/api/athletes", (req, res) => {
    res.send(athletes);
});

app.get("api/athletes/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const athlete = athletes.find((r) => r._id === id);

    if(!athlete){
        res.status(404).send("The athlete with the given id was not found");
    }

    res.send(athletes);
});

const getAthlete = async(res) => {
    const athlete = await Athlete.findOne({_id:id});
    res.send(athlete);
};

app.post("/api/athletes", upload.single("img"), (req, res) => {
    const result = validateAthlete(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const athlete = new Athlete({
        name: req.body.name,
        sport: req.body.sport,
        description: req.body.description,
        awards: req.body.awards.split(",")
    })


    if(req.file) {
        athlete.img = "images/" + req.file.filename;
    }

    createAthlete(athlete, res);
});

const createAthlete = async (athlete, res) => {
    const result = await athlete.save();
    res.send(athlete);
};

app.put("/api/athletes/:id", upload.single("img"), (req, res) => {
    const result = validateAthlete(req.body);
    console.log(result);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateAthlete(req,res);
});

const updateAthlete = async (req,res) => {
    let fieldsToUpdate ={
        name: req.body.name,
        sport: req.body.sport,
        description: req.body.description,
        awards: req.body.awards.split(","),
    };

    if(req.file) {
        fieldsToUpdate.img = "images/" + req.file.filename;
    }

    const result = await Athlete.updateOne({_id:req.params.id }, fieldsToUpdate);
    const athlete = await Athlete.findById(req.params.id);
    res.send(athlete);
};

app.delete("/api/athletes/:id", upload.single("img"), (req,res) =>{
    removeAthletes(res, req.params.id);
});

const removeAthletes = async(res, id) => {
    const athlete = await Athlete.findByIdAndDelete(id);
    res.send(athlete);
}
const validateAthlete = (athlete) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        sport: Joi.allow(""),
        awards: Joi.allow(""),
        name: Joi.string().min(3).required(),
        description: Joi.string().min(3).required()
    });
    return schema.validate(athlete);

};

app.listen(5000, () => {
    console.log("I'm listening");
});