const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;
const Schema = mongoose.Schema;





const moduleSchema = new mongoose.Schema({

    moduleName: {
        type: String
    },
    moduleTitle: {
        type: String
    },
    Validation: {
        type: String
    },
    Note: {
        type: String
    },
    ProfessorResp: {
        type: String
    }
    
});

/**
 * Virtual fields are additional fields for a given model.
 * Their values can be set manually or automatically with defined functionality.
 * Keep in mind: virtual properties (password) don’t get persisted in the database.
 * They only exist logically and are not written to the document’s collection.
 */


module.exports = mongoose.model("Module", moduleSchema);
