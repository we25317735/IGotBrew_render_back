import mysql from 'mysql2'
import 'dotenv/config.js' // 載入 .env

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'coffee',
  password: 'a12345',
  database: 'igotbrew',
})

// aiven 資料庫
// const connection = mysql.createConnection({
//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE,
// })

export default connection
