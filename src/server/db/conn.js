import session from 'express-session';
import RawStore from 'express-mysql-session';
import { createPool } from 'mysql';

const MySQLStore = RawStore(session);

export const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

/* For use with Passport session({ store: ... }) */
export const sessionStore = new MySQLStore({}, pool);
