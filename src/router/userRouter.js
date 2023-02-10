const {Router} = require('express');
//import {Router} from "express";
const { createUser, updateUser, deleteUser, getUser } = require('../controllers/userController');
//import {getAllUsers, getUserById , createUser , updateUser , deleteUser} from '../controllers/userController'


const userRouter = Router();
userRouter.get('/users/:id', getUser)
userRouter.post('/users/', createUser);
userRouter.patch('/users/:id', updateUser);
userRouter.delete('/users/:id', deleteUser);

module.exports = userRouter
//export default userRouter