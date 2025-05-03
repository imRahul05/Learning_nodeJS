const sendResponse = (res, statusCode, msg) =>  res.status(statusCode).json({ message: msg });

module.exports=sendResponse