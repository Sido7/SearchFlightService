const ClientErrorCodes = Object.freeze({
    BAD_REQUEST : 400,
    NOT_FOUND : 404,
    UNAUTHORISED : 401
})

const ServerErrorCodes = Object.freeze({
    INTERNAL_SERVER_ERROR : 500,
    Not_IMPLEMENTED : 501
})

const SuccessCodes = Object.freeze({
    CREATED : 201,
    OK : 200
})


module.exports = {
    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes
}