const {Router} = require('express');
const { createUser, updateUser, deleteUser, getUser , userLogin , userVerification } = require('../controllers/userController');


const userRouter = Router();

userRouter.get('/:id', getUser);
userRouter.post('/', createUser);
userRouter.post('/login',userLogin);
userRouter.post('/verify',userVerification);
userRouter.patch('/:id', updateUser);
userRouter.delete('/:id', deleteUser);


module.exports = userRouter
