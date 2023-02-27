import { Model, DataTypes } from 'sequelize';
import sequelize from '../database/database';

export class Category extends Model {}

Category.init(
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
    code: {
      allowNull: true,
      type: DataTypes.DECIMAL(10, 2),
    },
  },
  {
    sequelize,
    modelName: 'categories',
  }
);
