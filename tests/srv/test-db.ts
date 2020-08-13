import MySQLDriver from '../../src/db/mysql-driver'
import mysql, { createPool } from 'mysql'
import dotenv from 'dotenv'

dotenv.config(
    {
        path: "test.env"
    }
);

let TestMySQLDriver = MySQLDriver.usePool(createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
}))

export default TestMySQLDriver;