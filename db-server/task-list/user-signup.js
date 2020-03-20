import sql from '../db-connection/database-connection';

export const signup = function userSignUp({ username, password }, f, g) {
  sql.query(`select * from users where username='${username}'`, (err, res) => {
    if (err) {
      g(err, true);
    } else {
      if (res !== undefined && res.length > 0) {
        f();
      } else {
        sql.query(`insert into users (username, password) values ('${username}', '${password}')`,
          (insertErr, insertRes) => {
            if (insertErr) {
              g(insertErr, true);
            } else {
              g(insertRes, false);
            }
          }
        );
      }
    }
  });
}
