import { Sequelize } from 'sequelize';
// import { config } from 'dotenv';

// config(); // Load environment variables from .env file

// const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize('CreativeApp', 'root', 'incorrect', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;
