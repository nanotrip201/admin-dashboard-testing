const { createModel } = require("./createMasterData.model");

/**
 * Create a Mongoose model for UserCountry with custom fields and middleware.
 * @param {string} modelName - The name of the Mongoose model to create.
 * @param {object} additionalSchemaFields - Additional fields to include in the UserCountry schema.
 * @returns {mongoose.Model} - The Mongoose model for UserCountry.
 * 
*/

const additionalField = {
  value: {
    type: String,
    required: true,
  },
}

let UserHoroscope = createModel("userhoroscope", additionalField);

module.exports = { UserHoroscope };