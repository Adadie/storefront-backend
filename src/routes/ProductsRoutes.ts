import { Router } from 'express';
import { getAllProducts, createProduct } from '../controllers/ProductController';
import { upload } from '../middlewares/upload';

const router = Router();

router.get('/', getAllProducts);
router.post('/', upload.single('image'), createProduct);
// router.post('/', createProduct);

export default router;
