let jwt = require('jsonwebtoken');
let config = require('../../../config');
let userCollection = require('../register/model');


let login = (req,res) => {
    userCollection.findOne({ email : req.body.email })
        .then(
            (response)=>{
                if(response.password == req.body.password){
                    jwt.sign({id:response._id},config.jwt.secret,function(err,encodedData){
                        if(err){
                            throw err;
                        }else{
                            res.status(200).json({ status : true , message : "Login Successful" ,user : response ,userToken : encodedData });
                        }
                    })
                    
                }else{
                    res.status(200).json({ status : false , message : "Wrong Credentials"   });
                }
            }
        ).catch(
            (err)=>{
                console.log(err);
                res.status(500).json({ status : false , message : "Error while login"   });
            }
        )
}



module.exports = {
    login
}