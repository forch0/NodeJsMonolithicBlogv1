/**
 * @license Apache-2.0
 * @copyright 2024 seniordevforch
 */

'use strict';


/**
 * node modules
 */
const router = require('express').Router();


/**
 * custom modules
 */
const logout = require('../controllers/logout_controller');


// POST route: Handle user logout.
router.post('/', logout);


module.exports = router;