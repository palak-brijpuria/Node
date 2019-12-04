const mysql = require('mysql')

function connect() {
    const connection = mysql.createConnection({
        host: '192.168.2.15', //changes from network to network
        user: 'root',
        password: 'root',
        database: 'myapp_db',
        port: 9099
    })

    connection.connect()
    return connection
}

module.exports = {
    connect: connect
}
