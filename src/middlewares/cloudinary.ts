import { RequestHandler } from 'express';
import cloudinary from 'cloudinary';
import {Product} from '../models/Product';

const createProduct: RequestHandler = async (req, res, next) => {
  const { name, description, price } = req.body;
  const imageUrl = req.file ? req.file.path : '';

  // Upload image to Cloudinary
  const result = await cloudinary.v2.uploader.upload(imageUrl);

  // Create new product object
  const newProduct = new Product({
    name,
    description,
    price,
    imageUrl: result.secure_url,
    cloudinaryId: result.public_id,
  });

  // Save new product to database
  try {
    const savedProduct = await newProduct.save();
    res.json(savedProduct);
  } catch (err) {
    next(err);
  }
};
