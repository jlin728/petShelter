let mongoose = require("mongoose");  
let Pet = mongoose.model("Pet");

class PetController{
    
    all(req, res) { 
        Pet.find({}, (err, pets)=> {
            if(err) {
                console.log("Error finding all pets");
                res.json({errors: err});
            }
            else {
                res.json(pets);
            }
        })
    }

    create(req, res) {
        let pet = new Pet(req.body);
        console.log(pet);
        pet.save(function(err) {
            if(err) {
                console.log("Not saved!");
                res.json({errors: err});
            }
            else {
                console.log("Pet saved!");
                res.json(pet);        
            }
        }) 
    }
    
    find(req, res) {
        Pet.findOne({_id: req.params.id}, (err, pet)=> {
            if(err) {
                console.log("Cannot finding pet");
                res.json({errors: err})
            }
            else {
                res.json(pet);            
            }
        })
    }
    
    update(req, res) {         
        Pet.update({_id: req.params.id}, req.body, function(err) {
            if(err) {
                res.json({message: "Cannot update pet", error: err})
            }
            else {
                res.json("Pet successfully updated");                  
            }
        });
    }
    
    destroy(req, res) {
        Pet.remove({_id: req.params.id}, (err)=> {
            if(err) {
                res.json({message: "Cannot delete pet", error: err})
            }
            else {            
                res.json("Deleted pet!");                   
            }
        })
    }

    like(req, res) {
        Pet.findOne({_id: req.params.id}, (err, pet)=> {
            if(err) {
                console.log("Error finding pet");
                res.json({errors: err})
            }
            else {
                pet.likes =+ 1;
                pet.save((err)=>{
                    if(err){
                        res.json({message: "Error updating pet", error: err})
                    }
                })
                res.json(pet);            
            }
        })
    }


}
module.exports = new PetController(); 