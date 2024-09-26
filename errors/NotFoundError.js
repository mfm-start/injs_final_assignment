class NotFoundError extends Error {
    constructor(message = "Sorry, could not find what you are looking for") {
        super(message);
        this.statuscode="404";
        this.name = "NotFoundError";
    }
}

module.exports = NotFoundError;