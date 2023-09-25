const { createModel } = require("./createMasterData.model");



// User Birth
const additionalField = {
  value: {
    type: Number,
    required: true,
  },
}

const UserBirthTime = createModel("userbirthtime", additionalField);

module.exports = { UserBirthTime };