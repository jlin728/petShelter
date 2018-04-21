let mongoose = require("mongoose"),
    // ObjectId = mongoose.Schema.Types.ObjectId,
    ObjectId = mongoose.Types.ObjectId,
    p = mongoose.model("Pet", new mongoose.Schema({
        name:{ type: String, required: true, minlength: 3, maxlength: 255},
        type:{type: String, require: true, minlength: 3, maxlength: 255},
        description:{type: String, require: true, minlength: 3, maxlength: 255},
        skill1:{type: String, require: false, maxlength: 255},
        skill2:{type: String, require: false, maxlength: 255},
        skill3:{type: String, require: false, maxlength: 255},
        likes:{type: Number}
        },
        {timestamps: true}));