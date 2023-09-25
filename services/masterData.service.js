const mongoose = require('mongoose');
const { HTTP_STATUS, sendResponse, handleUpdateError } = require("../util/reqResErrHandler");

/**
 * Retrieve all data from a database model and send an HTTP response.
 *
 * @param {Mongoose.Model} model - The Mongoose model for data retrieval.
 * @param {express.Response} res - The HTTP response object.
 * @returns {Promise<User|void>} A Promise that resolves when the response is sent.
 * @throws {Error} If an error occurs during data retrieval.
 * 
*/
const getAllData = async (model, res) => {
  try {
    const data = await model.find();

    if (!data) {
      // No data found response
      return sendResponse(res, "error", HTTP_STATUS.NO_CONTENT, "No data found!", data = {});
    }
    
    // Successful response with data.
    return sendResponse(res, "success", HTTP_STATUS.OK, "", data);
  } catch (error) {
    // Handle errors.
    return error && handleUpdateError(res, error, "getAllData");
  }
}

/**
 * Add new data to a database model and send an HTTP response.
 *
 * @param {*} req - Express request object.
 * @param {*} res - Express response object.
 * @param {*} addData - The data to add to the model.
 * @param {Mongoose.Model} model - The Mongoose model for data addition.
 * @returns {Promise<void>} A Promise that resolves when the response is sent.
 * 
*/
const addNewData = async (req, res, model, addData) => {
  try {
    const addNewData = await model.create(addData);

    if (!addNewData) {
      return sendResponse(res, "error", HTTP_STATUS.BAD_REQUEST, "No data saved. Please try again later.", data = {});
    }

    return sendResponse(res, "success", HTTP_STATUS.CREATED, "Data added successfully!", addNewData);
  } catch (error) {
    return error && handleUpdateError(res, error, "addData");
  }
}

/**
 * Change the order number of a document and update other documents accordingly.
 *
 * @param {Mongoose.Model} model - The Mongoose model for data update.
 * @param {string} id - The ID of the user to update.
 * @param {number} newOrderNumber - The new order number to set.
 * @returns {boolean|string} True if the order number was successfully changed, or "Document not found" if the user was not found.
 * 
*/
const changeOrderNumber = async (model, id, newOrderNumber) => {
  try {
    // Find the document you want to move and get its current orderNumber
    const docToMove = await model.findOne({ _id: id });

    if (!docToMove) {
      return "Document not found";
    }

    const currentOrderNumber = docToMove.orderNumber;

    // Start a MongoDB session to ensure consistency
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      // Calculate the difference between the current and new orderNumbers
      const orderNumberDifference = newOrderNumber - currentOrderNumber;

      // Update the orderNumbers of other documents based on the difference
      if (orderNumberDifference < 0) {
        // If decreasing orderNumber, increment others
        await model.updateMany(
          { orderNumber: { $gte: newOrderNumber, $lt: currentOrderNumber } },
          { $inc: { orderNumber: 1 } }
        );
      } else if (orderNumberDifference > 0) {
        // If increasing orderNumber, decrement others
        await model.updateMany(
          { orderNumber: { $gt: currentOrderNumber, $lte: newOrderNumber } },
          { $inc: { orderNumber: -1 } }
        );
      }

      // Update the orderNumber of the document you want to change
      await model.updateOne({ id }, { orderNumber: newOrderNumber });

      await session.commitTransaction();
      session.endSession();

      return true;
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      console.error("changeOrderNumber: Error:", error);
      throw error;
    }
  } catch (error) {
    console.error("changeOrderNumber: Outer error:", error);
    return false;
  }
}

/**
 * Handle an update operation on a database model and send an HTTP response.
 *
 * @param {*} req - Express request object.
 * @param {*} res - Express response object.
 * @param {Mongoose.Model} model - The Mongoose model for data update.
 * @param {string} id - The ID of the user to update.
 * @param {*} updateData - The data to update in the model.
 * @returns {Promise<void>} A Promise that resolves when the response is sent.
 * 
*/
const updateData = async (req, res, model, id, updateData) => {
  try {
    const userIdExist = await model.findById(id);

    if (!userIdExist) {
      return sendResponse(res, "error", HTTP_STATUS.NO_CONTENT, "User Not Exist", {});
    }

    if (updateData.orderNumber && userIdExist.orderNumber !== updateData.orderNumber) {
      const orderNumberChanged = await changeOrderNumber(model, id, updateData.orderNumber);

      if (!orderNumberChanged) {
        return sendResponse(res, "error", HTTP_STATUS.INTERNAL_SERVER_ERROR, "Failed to change order number", {});
      }
    }

    const updatedDoc = await model.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedDoc) {
      return sendResponse(res, "error", HTTP_STATUS.INTERNAL_SERVER_ERROR, "Failed to update data", {});
    }

    return sendResponse(res, "success", HTTP_STATUS.OK, "Data has been updated successfully", updatedDoc);
  } catch (error) {
    return handleUpdateError(res, error, "updateData");
  }
};

/**
 * Activate or deactivate the status of a document and send an HTTP response.
 *
 * @param {*} req - Express request object.
 * @param {*} res - Express response object.
 * @param {Mongoose.Model} model - The Mongoose model for data update.
 * @param {string} id - The ID of the user to activate or deactivate.
 * @returns {Promise<void>} A Promise that resolves when the response is sent.
 * 
*/
const activateDeactivateStatus = async (req, res, model, id) => {
  try {
    const DocExist = await model.findById(id);

    if (!DocExist) {
      return sendResponse(res, "error", HTTP_STATUS.NO_CONTENT, "User Not Exist", {});
    }

    const STATUS_ACTIVE = "A";
    const STATUS_DEACTIVATED = "D";
    
    const statusUpdateData = {
      status: DocExist.status === STATUS_ACTIVE ? STATUS_DEACTIVATED : STATUS_ACTIVE,
      deletedAt: new Date(),
    }

    return await updateData(req, res, model, id, statusUpdateData);
  } catch (error) {
    return handleUpdateError(res, error, "activateDeactivateStatus");
  }
}

module.exports = { getAllData, updateData, activateDeactivateStatus, addNewData }