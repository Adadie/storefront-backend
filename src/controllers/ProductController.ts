import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file.filename;

    const product = await Product.create({
      name,
      description,
      price,
      image,
    });

    res.status(201).json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};
