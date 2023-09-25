const { createModel } = require("./createMasterData.model");

/**
 * Create a Mongoose model for UserAge with custom fields and middleware.
 * @param {string} modelName - The name of the Mongoose model to create.
 * @param {object} additionalSchemaFields - Additional fields to include in the UserCountry schema.
 * @returns {mongoose.Model} - The Mongoose model for UserCountry.
 * 
*/

const additionalField = {
  value: {
    type: Number,
    required: true,
  },
}

let UserAge = createModel("userAge", additionalField);

module.exports = { UserAge };