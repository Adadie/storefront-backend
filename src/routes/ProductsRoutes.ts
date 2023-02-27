import { Router } from 'express';
import { getAllProducts, createProduct } from '../controllers/ProductController';
import { upload } from '../middlewares/upload';

const router = Router();

router.get('/products', getAllProducts);
router.post('/products', upload.single('image'), createProduct);

export default router;
