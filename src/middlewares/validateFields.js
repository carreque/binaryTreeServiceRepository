const {validationResult} = require('express-validator');
const {request, response} = require('express');

const validateFields = (req = request, res = response, next) => {

    /**
     * 1 - Check if the request has any errors
     * 2 - If there is any error, then return a bad request response with an error message
     * 3 - If there isn't any error, then continue executing the request
     */
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json("Your JSON payload is expected to at least contain two fields named `tree` and `value`");      
    }

    next();
}

//Function to validate if the field tree is sent in the request body. This is necessary because it could be null so it is necessary to create a custom validation.
const checkTreeValue = (value) => value === null || value !== undefined;
module.exports = {
    validateFields,
    checkTreeValue
}