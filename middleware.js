let jwt = require('jsonwebtoken');
let config = require('./config');


let middleware = (req,res,next)=>{
    let token = req.headers.token || req.token.authorization || req.headers.userToken;
    jwt.verify(token,config.jwt.secret,function(err,decodedData){
        if(err){
            res.status(401).json({ status: false ,message: "Not Authorized" });
        }else{
            req.jwt = decodedData;
            console.log(req.jwt);
            next();
        }
    })
}

module.exports = {
    middleware
}