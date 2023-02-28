import { Request, Response } from 'express';
import { Category } from '../models/Category';

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const createCategories = async (req: Request, res: Response) => {
  try {
    const { name, code} = req.body;

    const category = await Category.create({
      name,
      code,
    });

    res.status(201).json({ success: true, category });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

