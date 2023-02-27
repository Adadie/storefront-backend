import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import  ProductRoutes from './routes/ProductsRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

// Routes
app.use('/products', ProductRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
