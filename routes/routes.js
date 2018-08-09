let express = require('express');
let router = express.Router();

let registrationRouter = require('../server/apis/register/route');

let loginRouter = require( '../server/apis/login/route' );

let middleWare = require('../middleware');


router.use( '/user' , registrationRouter );

router.use( '/userLogin' , loginRouter );

router.use( '/post' , middleWare.middleware  );



module.exports = router;