let PetController      = require("../controller/PetController.js"),
    path               = require("path");

module.exports = (app) => {
    // Pets
    app.get("/api/pets", PetController.all);
    app.get("/api/pets/:id", PetController.find);
    app.post("/api/pets", PetController.create);
    app.put("/api/pets/:id", PetController.update);
    app.delete("/api/pets/:id", PetController.destroy);
    app.get("/api/pets/like/:id", PetController.like);

    //Angular
    app.all("*", (req, res, next)=> {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });

};