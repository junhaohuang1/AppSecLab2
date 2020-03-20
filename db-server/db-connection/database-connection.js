import mysql from 'mysql';

const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'appsec',
    multipleStatements: true
  }
);

connection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to MySQL Database');
  }
});

export default connection;
