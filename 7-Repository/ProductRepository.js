const Database = require('./database')

class ProductRepository {
    constructor() { }

    selectAll() {
        const db = new Database("localhost", "root", "root")
        db.sql(`SELECT * FROM PRODUCT`)
    }

    insert({ id, name, price }) {
        const db = new Database("localhost", "root", "root")
        db.sql(`INSERT INTO PRODUCT (id, name, price) VALUES ('${id}', '${name}', '${price}')`)
    }

    update(id, product) {
        const { name, price } = product
        const db = new Database("localhost", "root", "root")
        db.sql(`UPDATE PRODUCT SET name = '${name}', SET price = '${price}' WHERE id = '${id}'`)
    }

    delete(id) {
        const db = new Database("localhost", "root", "root")
        db.sql(`DELETE FROM PRODUCT WHERE id = '${id}'`)
    }
}

module.exports = ProductRepository