const { getAllUsers, createUser, removeUser, getOneUser, updateUser } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/users")
        .get(getAllUsers)
        .post(createUser)

userRouter.route("/users/:id")
        .delete(removeUser)
        .get(getOneUser)
        .put(updateUser)

module.exports = userRouter;