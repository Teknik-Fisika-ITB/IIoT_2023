const User = require("../models/user");

const UserController = {};

UserController.index = (req,res)=>{
    User.all((err,rows)=>{
        if(err){
            res.render("error",{message:err.message});
        } else {
            res.render("index",{users:rows});
        }
    });
}

UserController.create = (req,res) => {
    const params = {
        name:req.body.name,
        email:req.body.email
    };

    User.create(params,(err) => {
        if(err){
            res.render("error",{message:err.message});
        } else {
            res.redirect("/");
        }
    });
}

module.exports = UserController;