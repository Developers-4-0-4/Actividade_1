const db = require('mysql2')

var pool = db.createPool({
    "connectionLimit" : 1000,
    "user" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DB,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT
})

exports.execute = (query, params) => {
    return Promise((resolve, reject) => {
        pool.query(query, params, (error, result, fields) => {
            if(error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

exports.pool = pool