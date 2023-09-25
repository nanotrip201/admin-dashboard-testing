const mongoose = require("mongoose");

/**
 * HTTP_STATUS: An object containing HTTP status code constants for use in responses.
*/
const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

/**
 * sendResponse: A function to send HTTP responses with status, message, and optional data.
 *
 * @param {*} res - Express response object.
 * @param {*} status - Status indicator ("success" or "error").
 * @param {*} statusCode - HTTP status code.
 * @param {*} message - Response message.
 * @param {*} data - Optional response data (object or array).
 * @returns The JSON response.
 * 
*/
const sendResponse = (res, status, statusCode = Number, message, data = {} | [] ) => {
  return res.status(statusCode).json({
    status: status,
    message: message,
    data: data
  });
};

/**
 * handleUpdateError: A function to handle update errors, including validation errors and duplicates.
 *
 * @param {*} res - Express response object.
 * @param {*} error - The error object to handle.
 * @param {*} errorLoggerName - Optional name for error logging.
 * @returns The JSON response for the handled error.
 * 
*/
const handleUpdateError = (res, error, errorLoggerName) => {
  let statusCode;
  let message;

  if (error instanceof mongoose.Error.ValidationError) {
    if (error.errors && error.errors.value && error.errors.value.kind === 'Number') {
      statusCode = HTTP_STATUS.BAD_REQUEST;
      message = 'Invalid value. Please provide a valid number.';
    } else {
      statusCode = HTTP_STATUS.BAD_REQUEST;
      message = 'Validation Error (Empty field or Invalid Input)';
    }
  } else if (error.code === 11000) {
    statusCode = HTTP_STATUS.CONFLICT;
    message = 'Duplicate Key Error';
  } else {
    statusCode = HTTP_STATUS.INTERNAL_SERVER_ERROR;
    message = 'Something went wrong, please try again later.';
    // Use a logging library here to log the error.
    // Example: logger.error('Error in updateUserData:', error);
    errorLoggerName && console.error(`Error in ${errorLoggerName}: `, error);
  }

  return sendResponse(res, "error", statusCode, message, data = {});
};

module.exports = {
  HTTP_STATUS,
  sendResponse,
  handleUpdateError
}