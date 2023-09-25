const { createModel } = require("./createMasterData.model");

/**
 * Create a Mongoose model for UserWeight with custom fields and middleware.
 * @param {string} modelName - The name of the Mongoose model to create.
 * @param {object} additionalSchemaFields - Additional fields to include in the UserWeight schema.
 * @returns {mongoose.Model} - The Mongoose model for UserWeight.
 * 
*/

const additionalField = {
  value: {
    type: Number,
    required: true,
  },
}

const UserAnnualIncome = createModel("userannualincomes", additionalField);

module.exports = { UserAnnualIncome };