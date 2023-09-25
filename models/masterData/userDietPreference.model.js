const { createModel } = require("./createMasterData.model");

/**
 * Create a Mongoose model for UserDietPreference with custom fields and middleware.
 * @param {string} modelName - The name of the Mongoose model to create.
 * @param {object} additionalSchemaFields - Additional fields to include in the UserDietPreference schema.
 * @returns {mongoose.Model} - The Mongoose model for UserDietPreference.
 * 
*/

const additionalField = {
  value: {
    type: String,
    required: true,
  },
}

let UserDietPreference = createModel("userdietaryprefrences", additionalField);

module.exports = { UserDietPreference };
