const {Router} = require('express');
const {check} = require('express-validator');
const { validateFields, checkTreeValue } = require('../middlewares/validateFields');
const { insertNewValue, testConnection } = require('../controllers/treeOperationsController');

//Initialize new router
const router = Router();

/**
 * Post request with the path /insertValue. 
 * It will apply the following validators to ensure that the fields of the endpoint are sent it correctly.
 * If the fields are sent it correctly, then the function insertNewValue will be executed
 */
router.post('/insertValue', [
    check('value', 'Value field could not be empty').notEmpty(),
    check('value', 'Value field should be numeric').isInt(),
    check('tree').custom(checkTreeValue).withMessage('Tree field could not be empty'),
    validateFields
], insertNewValue);

router.get('/helloWorld', testConnection);

module.exports = router;