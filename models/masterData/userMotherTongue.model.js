const { createModel } = require("./createMasterData.model");

/**
 * Create a Mongoose model for UserMotherTongue with custom fields and middleware.
 * @param {string} modelName - The name of the Mongoose model to create.
 * @param {object} additionalSchemaFields - Additional fields to include in the UserMotherTongue schema.
 * @returns {mongoose.Model} - The Mongoose model for UserMotherTongue.
 * 
*/

const additionalField = {
  value: {
    type: String,
    required: true,
  },
}

let UserMotherTongue = createModel("userMotherTongue", additionalField);

module.exports = { UserMotherTongue };
