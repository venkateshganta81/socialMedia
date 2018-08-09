let userCollection = require('./model');




let register = (req, res) => {
    userCollection.create(req.body)
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Succesfully registered", user: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: false, message: "Please try again" });
            }
        )
}


let getUserDetails = (req, res) => {
    userCollection.findOne({ _id: req.params.id })
        .then(
            (response) => {
                if (response == null) {
                    res.status(200).json({ status: false, message: "User doesnot exist" });
                } else {
                    res.status(200).json({ status: true, message: "Succesfully fetched User Details", user: response });
                }
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: false, message: "Error while Finding Details , Please try again" });
            }
        )
}


let updateUserDetails = (req, res) => {
    userCollection.findOneAndUpdate({ _id: req.body.id }, { $set: { mobile: req.body.mobile } }, { new: true })
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "Succesfully updated User Details", user: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: false, message: "Error while updating Details , Please try again" });
            }
        )
}


let deleteUser = (req, res) => {
    userCollection.findOneAndRemove({ email: req.body.email })
        .then(
            (response) => {
                res.status(200).json({ status: true, message: "User Deleted Succesfully", user: response });
            }
        ).catch(
            (error) => {
                res.status(500).json({ status: false, message: "Error while deleting , Please try again" });
            }
        )
}


module.exports = {
    register,
    getUserDetails,
    updateUserDetails,
    deleteUser
}