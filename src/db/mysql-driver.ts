import { createPool, Pool } from 'mysql'

class MySQLDriver {

    private mysqlPool: Pool = null;

    private static driver: MySQLDriver = null;

    private constructor(pool?: Pool) {
        if (pool) {
            this.mysqlPool = pool
        } else {
            this.mysqlPool = createPool({
                user: process.env.DB_USER,
                password: process.env.DB_PASS,
                database: process.env.DB_NAME,
                host: process.env.DB_HOST
            })
        }
    }

    public destroy() {
        if (this.mysqlPool) {
            this.mysqlPool.end()
        }
    }

    /**
     * Sends a query to the database and returns results list.
     * @param query 
     * @param args 
     */
    public query(query: string, args?: (string | number)[]): Promise<[{}]> {

        return new Promise(
            (resolve, reject) => {
                this.mysqlPool.getConnection((err, conn) => {

                    if (err) {
                        reject(err);
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

    /**
     * DEPENDENCY INJECTION: Overrides the current MySQL pool connection with 
     * the `pool` connection. Use this only for testing.
     *
     * For Production and Development - use `.getDriver()` method
     * @param pool 
     */
    public static usePool(pool: Pool) {
        
        if (MySQLDriver.driver) {
            MySQLDriver.driver.destroy();
        }

        MySQLDriver.driver = new MySQLDriver(pool)

        return MySQLDriver.driver;
    }

    public static getDriver() {

        if (!MySQLDriver.driver) {
            MySQLDriver.driver = new MySQLDriver();
        }

        return MySQLDriver.driver;

    }
}
export default MySQLDriver;