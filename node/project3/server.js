const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "index.html");
});

app.get("/api/nintendos", (req, res) => {
    const nintendos = [];
    nintendos[0] = {
        name: "Mario",
        age: 42, 
        occupaion: "Plumber",
        location: "Mushroom Kingdom",
        items :["Super Mushroom",
                "Fire Flower",
                "Invincibility Star",
                "Cape",
                "Boot",
                "Magic Leaf",
            ],
        img: "images/mario.png"
    };
    nintendos[1] = {
        name: "Link",
        age: 36, 
        occupaion: "Hero of Time",
        location: "Hyrule",
        items :["Sword",
                "Shield",
                "Hookshot",
                "Fishing Rod",
                "Bombs",
                "Boomerang",
                "Ocarine of Time",
                ],
        img: "images/link.png"
    };
    nintendos[2] = {
        name: "Samaus Aran",
        age: 37, 
        occupaion: "Bounty Hunter",
        location: "Zebes",
        items :["Morph Ball Bomb",
                "Screw Attack",
                "Ice Beam",
                "Hyper Beam",
                "Missiles",
                "Power Suit"
                ],
        img: "images/samus.png"
    };
    nintendos[3] = {
        name: "Donkey Kong",
        age: 42, 
        occupaion: "Banana Horder",
        location: "Donkey Kong Island",
        items :["Banana",
                "Ammo Pack",
                "Bongo",
                "Balloons"
                ],
        img: "images/donkey kong.png"
    };
    nintendos[4] = {
        name: "Pikachu",
        age: 27, 
        occupaion: "Pocket Monster(Pokemon)",
        location: "Pokeball",
        items :["Thunder Stone",
                "HP Potion",
                "Oran Berry",
                "Z-Crystals"
                ],
        img: "images/pikachu.png"
    };
    nintendos[5] = {
        name: "Kirby",
        age: 31, 
        occupaion: "Star Warrior",
        location: "Mushroom Kingdom",
        items :["Star Rod",
                "Warp Star",
                "Maxim Tomato",
                "Invinicible Candy",
                "1UP"
                ],
        img: "images/kirby.png"
    };

    res.json(nintendos);
});

app.listen(5000, () => {
    console.log("I am Listening");
});