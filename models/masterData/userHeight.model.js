const { createModel } = require("./createMasterData.model");


const additionalField = {
  value: {
    type: Number,
    required: true,
  },
}

let UserHeight = createModel("userheights", additionalField);

module.exports = { UserHeight };