// Common fields for all schemas
const commonFields = {
  status: {
    type: String,
    default: "A",
  },
  insertedAt: {
    type: Date,
    default: Date.now,
  },
  deletedAt: { 
    type: Date, 
    default: null 
  },
};

module.exports = commonFields;