let express = require('express');
let userController = require('./controller');
let router = express.Router();



router.post('/userRegistration', userController.register );

router.get('/getUserDetails/:id', userController.getUserDetails);

router.put('/updateUser', userController.updateUserDetails);

router.delete('/deleteUser', userController.deleteUser );


module.exports = router;