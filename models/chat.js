const mongoose = require("mongoose");

const stdSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },

    to: {
        type: String,
        require: true,
        // unique: true
    },

    msg: {
        type: String,
        // unique: true
    }

});

const Chat = mongoose.model("Student", stdSchema);

module.exports = Chat;