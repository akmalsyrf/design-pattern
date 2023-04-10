const Connection = require("./database")

class OrderDetailService {
    constructor() { }

    save(orderId, product) {
        const conn = new Connection("localhost", "root", "root")
        conn.sql(`INSERT INTO Order (order_id, product) VALUES (${orderId}, ${product})`)
    }
}

module.exports = OrderDetailService