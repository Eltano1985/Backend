import express from 'express';
import { 
    getAllUsers, 
    createUser,
    updateUser,
    deleteUser,
} from '../controllers/userController.js';
import { validateGmail } from '../middlewares/validateEmail.js';
import { validateName } from '../middlewares/validateName.js';

const router = express.Router();

router.get('/user', getAllUsers);
router.post('/user', validateName, validateGmail, createUser);
router.put('/user/:id', validateName, validateGmail, updateUser);
router.delete('/user/:id', deleteUser);
router.get('/saludo', (req, res)=>{
    res.send("hola mundo");
})
export default router;
