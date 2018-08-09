module.exports = {
    port : 3000,
    jwt : {
        secret : 'socialMedia@123#',
        options : { expiresIn : 60 * 60 * 24 * 1 } // 1 Day 
    },
    db : {
        uri : "mongodb://localhost:27017/socialMedia"
    }
}