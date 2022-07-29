import mysql from 'mysql2/promise';
import env from '../config/env';

const db = mysql.createPool({
  host: env.host,
  user: env.user,
  password: env.password,
});

export default db;