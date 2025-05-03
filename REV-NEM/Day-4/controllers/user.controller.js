const sendResponse = require("../utils/response");

const testing = (req, res) => {
  sendResponse(res,200,"Testing...");
};

module.exports = { testing };
