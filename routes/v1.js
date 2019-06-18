const express 			= require('express');
const router 			= express.Router();

const UserController 	= require('../controllers/user.controller');

const path              = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status:"success", message:"Parcel Pending API", data:{"version_number":"v1.0.0"}})
});

router.post('/users', UserController.create);                                                    // C
router.post('/users/login', UserController.login);

module.exports = router;
