import express from 'express';
import {
  getAllUsers
  //  todo: add other controller functions
} from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers);
router.post('/user/details',)
router.get('/user/{"id"}')
  rot
// Add: router.post, router.get('/:id'), router.put, router.delete

export default router;
