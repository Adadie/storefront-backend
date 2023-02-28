import express from 'express';
import { register, login } from '../controllers/AuthController';

const router = express.Router();

// register a new user
router.post('/register', register);

// login
router.post('/login', login);

export default router;
