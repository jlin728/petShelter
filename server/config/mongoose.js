let mongoose    = require("mongoose"),
    fs          = require("fs"),
    path        = require("path"),
    models      = path.join(__dirname, "../models");

mongoose.connect("mongodb://localhost/petShelter");

fs.readdirSync(models).forEach(function(file) {
    if(file.indexOf(".js") >= 0 ) {
        require(models + "/" + file);
        }
});