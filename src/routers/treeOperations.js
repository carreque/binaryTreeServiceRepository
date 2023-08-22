const {Router} = require('express');
const {check} = require('express-validator');
const { validateFields, checkTreeValue } = require('../middlewares/validateFields');
const { insertNewValue, testConnection } = require('../controllers/treeOperationsController');

//Initialize new router
const router = Router();

router.post('/insertValue', [
    check('value', 'Value field could not be empty').notEmpty(),
    check('tree').custom(checkTreeValue).withMessage('Tree field could not be empty'),
    validateFields
], insertNewValue);

router.get('/helloWord', testConnection);

module.exports = router;