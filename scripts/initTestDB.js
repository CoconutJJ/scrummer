

let initializeTestDatabase = (host, dbName, user, password, port) => {

    let mysql = require('mysql')

    let conn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        port: port
    })


    conn.query("SHOW DATABASES", (err, results) => {


        for (let row in results) {

            let { Database } = row;

            if (Database == dbName) {
                return
            }
        }


        
        return conn.query("CREATE DATABASE ?", [dbName])

    });
}

initializeTestDatabase('localhost', '', 'root', '', 3306)

