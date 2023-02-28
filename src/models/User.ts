import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize  from '../database/database';

export interface UserAttributes {
  id?: number;
  email: string;
  password: string;
  username: string;
  role:string;
}

export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

export const User = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    hooks: {
      beforeCreate: async (user: UserInstance) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);


// import { Model, DataTypes } from 'sequelize';
// import sequelize from '../database/database';

// export interface UserAttributes {
//   id?: number;
//   name: string;
//   email: string;
//   password: string;
// }
// export interface UserInstance extends Model<UserAttributes>, UserAttributes {}

// export class User extends Model {}

// User.init(
//   {
//     id: {
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true,
//       type: DataTypes.INTEGER,
//     },
//     email: {
//       allowNull: false,
//       type: DataTypes.DECIMAL(10, 2),
//       unique:true
//     },
//     password: {
//       allowNull: false,
//       type: DataTypes.TEXT,
//     },
//     username: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//     role: {
//       allowNull: false,
//       type: DataTypes.STRING,
//     },
//   },
//   {
//     sequelize,
//     modelName: 'users',
//   }
// );
