import { createPool, Pool } from 'mysql'

class MySQLDriver {

    private mysqlPool: Pool = null;

    private static driver: MySQLDriver = null;

    private constructor() {

        this.mysqlPool = createPool({
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME,
            host: process.env.DB_HOST
        })

    }

    public query(query: string, args?: (string|number)[]): Promise<[{}]> {

        return new Promise(
            (resolve, reject) => {
                this.mysqlPool.getConnection((err, conn) => {

                    if (err) {
                        reject(err)
                        return
                    }

                    conn.query(query, args, (err, results) => {
                        
                        conn.release();

                        if (err) {
                            reject(err);
                        } else {

                            resolve(results);
                        }

                    })

                })
            })
    }

    public static getDriver() {

        if (!MySQLDriver.driver) {
            MySQLDriver.driver = new MySQLDriver();
        }

        return MySQLDriver.driver;

    }
}

export default MySQLDriver;