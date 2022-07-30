import dotenv from 'dotenv';

dotenv.config();

export default {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  secret: process.env.JWT_SECRET || 'secret',
};