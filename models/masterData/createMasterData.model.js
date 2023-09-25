const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commonFields = require("../commonFields");

// Reusable function to create a model with order number middleware
// additionalField { {}, {} }
function createModel(modelName, additionalField){
  const schema = new Schema(
    {
      ...additionalField,
      orderNumber: {
        type: Number,
        default: 1,
        required: true,
      },
      ...commonFields,
    },
    { 
      timestamps: true 
    }
  );

  /*
  // // Custom validate if needed
  // schema.pre('validate', async function(next) {
  //   if (modelName === "userweight" && this.value !==  Number) {
  //     // this.invalidate(this.value, "is not a number");
  //   } else {
  //     next();
  //   }
  // })
  */

  // Define a middleware function to calculate the next order number
  schema.pre('save', async function (next) {
    if (this.isNew) {
      const currentMaxOrder = await this.constructor.find({})
        .sort({ orderNumber: -1 })
        .limit(1)
        .select('orderNumber');

      if (currentMaxOrder.length > 0) {
        this.orderNumber = currentMaxOrder[0].orderNumber + 1;
      }
    }
    next();
  });

  return mongoose.model(modelName, schema);
}

module.exports = { createModel };