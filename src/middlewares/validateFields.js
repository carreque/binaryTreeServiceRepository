const {validationResult} = require('express-validator');
const {request, response} = require('express');

const validateFields = (req = request, res = response, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    console.log(errors);
    if(!errors.isEmpty()){
        return res.status(400).json("Your JSON payload is expected to at least contain two fields named `tree` and `value`");      
    }

    next();
}

const checkTreeValue = (value) => value === null || value !== undefined;
module.exports = {
    validateFields,
    checkTreeValue
}