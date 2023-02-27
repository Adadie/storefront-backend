import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Product extends Model {}

Product.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    price: {
      allowNull: false,
      type: DataTypes.DECIMAL(10, 2),
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    category: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'products',
  },
);
