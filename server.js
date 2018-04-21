let express     = require("express");
    app         = express(),
    path        = require("path"),
    bodyParser  = require("body-parser"),       // Require body-parser (to receive post data from clients)
    mongoose    = require("mongoose"),
    port        = 8000;


app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static(__dirname + "/client/dist"));
app.use(express.json());

require("./server/config/mongoose.js");
require("./server/config/routes.js") (app);             // must have module.exports in Routes or else server will not run

app.listen(port, ()=>{
    console.log(`Connected to ${ port }!!!`)
});

