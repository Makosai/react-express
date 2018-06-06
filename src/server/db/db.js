import { app } from '../app';
import { pool } from './conn';
import { exists } from '../helper';
import createUsers from './queries/tables/create_users.sql';

/**
 * Initiate tables
 */
[createUsers] // An array of SQL to run.
  .forEach((stmt) => {
    if (exists(stmt)) {
      pool.getConnection((err, conn) => {
        conn.query(stmt, (error) => {
          conn.release();
          if (error) console.log(error);
        });
      });
    }
  });
