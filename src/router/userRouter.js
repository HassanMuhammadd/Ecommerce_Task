const {Router} = require('express');
const { createUser, updateUser, deleteUser, getUser } = require('../controllers/userController');


const userRouter = Router();
userRouter.get('/:id', getUser)
userRouter.post('/', createUser);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

module.exports = userRouter
