const express = require("express");
const Users = require("../models/userModel.js");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.get("/" , async (req, res) => {
    try {
        const users = await Users.find();
        res.send({message : "milgya user" , data : users});

    } catch (error) {
        console.log(error)
    }
});
router.get("/:id" , async (req, res) => {
    const id = req.params.id
    try {
        const users = await Users.findById(id);
        res.send({message : "specific user fetched" , specificUser : users});

    } catch (error) {
        console.log(error)
    }
});

// create a user 
router.post("/register" , async (req,res) => {
    try {
            const user = await Users.create(req.body);
            res.send({message : "user created success" , data : user})
    } catch (error) {
        console.log(error);
    }
})

// delete user
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send({ message: 'Invalid ID format' });
    }
    try {
        const student = await Users.findOneAndDelete({ _id: id });
        if (!student) {
            return res.status(404).send({ message: 'User not found' });
        }
        res.status(202).send({ message: 'User deleted' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
});

// update the user;
router.put(("/:id") , async (req, res) => {

    const id  = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).send({ message: 'no such student' })
        return
    }
    const user = await Users.findOneAndUpdate(
        id,
        { ...req.body }
    )
    if (!user) {
        res.send({ error: 'no user found' })
        return
    }
    res.send({ message: 'user updated', data: user })

})
 

module.exports = router;