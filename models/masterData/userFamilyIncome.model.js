const { createModel } = require("./createMasterData.model");

/**
 * Master Data API's Schema
 * @Schema_Structure
 * const Schema = new Schema({
 *   field1: {},
 *   field2: {},
 *   ...commonFields, // Reuse common fields
 * });
 * 
*/

// User Family Income
const additionalField = {
  value: {
    type: Number,
    required: true,
  },
}

const UserFamilyIncome = createModel("userfamilyincome", additionalField);

module.exports = { UserFamilyIncome };