// Error Handler class for
class ErrorHandler extends ErrorHandler {
    constructor(message, errorCode) {
        super(message)
        this.statusCode = statusCode

        Error.captureStackTrace(this, this.constructor)
    }
}

mosule.exports = ErrorHandler;