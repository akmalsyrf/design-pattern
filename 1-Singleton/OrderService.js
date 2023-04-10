const Connection = require("./database")

class OrderService {
    constructor() { }

    save(orderId) {
        const conn = new Connection("localhost", "root", "root")
        conn.sql(`INSERT INTO Order (order_id, product) VALUES (${orderId})`)
    }
}

module.exports = OrderService