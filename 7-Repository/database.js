class Connection {
    constructor(host, username, password) {
        this.host = host
        this.username = username
        this.password = password
    }

    sql(query) {
        console.log(query)
    }
}

module.exports = Connection