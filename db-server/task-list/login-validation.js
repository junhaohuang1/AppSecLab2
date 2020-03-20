import sql from '../db-connection/database-connection';

export const verify = function loginVerification({ username, password }, cb) {
  sql.query(`select id from users where username='${username}' and password='${password}'`,
    (err, res) => {
      if (err) {
        cb(err, true);
      } else {
        cb(res, false);
      }
    }
  )
}
