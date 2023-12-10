const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage});

//const blah = multer({ dest: __dirname + "/public/images" });

mongoose
    .connect(
        "mongodb+srv://sj49:cola@cluster0.fs0waxv.mongodb.net/"
    )
    .then(() => console.log("Connected to mongodb"))
    .catch((error) => console.log("Couldn't connect to mongodb", error));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/team.html");
});

const memberSchema = new mongoose.Schema({
    /* _id: mongoose.SchemaTypes.ObjectId, */
    name:String,
    number: String,
    description: String,
    awards: [String],
    img: String,
});

const Member = mongoose.model("Member", memberSchema);

app.get("/api/members", (req,res) => {
    getMembers(res);
});

const getMembers = async (res) => {
    const members = await Member.find();
    res.send(members);
};

app.get("/api/members", (req, res) => {
    res.send(members);
});

app.get("api/members/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const member = members.find((r) => r._id === id);

    if(!member){
        res.status(404).send("The member with the given id was not found");
    }

    res.send(members);
});

const getMember = async(res) => {
    const member = await Member.findOne({_id:id});
    res.send(member);
};

app.post("/api/members", upload.single("img"), (req, res) => {
    const result = validateMember(req.body);
    console.log(result);
    if (result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const member = new Member({
        name: req.body.name,
        number: req.body.number,
        description: req.body.description,
        awards: req.body.awards.split(",")
    })


    if(req.file) {
        member.img = "images/" + req.file.filename;
    }

    createMember(member, res);
});

const createMember = async (member, res) => {
    const result = await member.save();
    res.send(member);
};

app.put("/api/members/:id", upload.single("img"), (req, res) => {
    const result = validateMember(req.body);
    console.log(result);

    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        return;
    }

    updateMember(req,res);
});

const updateMember = async (req,res) => {
    let fieldsToUpdate ={
        name: req.body.name,
        number: req.body.number,
        description: req.body.description,
        awards: req.body.awards.split(","),
    };

    if(req.file) {
        fieldsToUpdate.img = "images/" + req.file.filename;
    }

    const result = await Member.updateOne({_id:req.params.id }, fieldsToUpdate);
    const member = await Member.findById(req.params.id);
    res.send(member);
};

app.delete("/api/members/:id", upload.single("img"), (req,res) =>{
    removeMembers(res, req.params.id);
});

const removeMembers = async(res, id) => {
    const member = await Member.findByIdAndDelete(id);
    res.send(member);
}
const validateMember = (member) => {
    const schema = Joi.object({
        _id: Joi.allow(""),
        number: Joi.allow(""),
        awards: Joi.allow(""),
        name: Joi.string().min(3).required(),
        description: Joi.string().min(3).required()
    });
    return schema.validate(member);

};

app.listen(5000, () => {
    console.log("I'm listening");
});