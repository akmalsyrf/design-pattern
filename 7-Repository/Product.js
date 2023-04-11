class Product {
    #id
    #name
    #price

    constructor(id, name, price) {
        this.#id = id
        this.#name = name
        this.#price = price
    }

    getId() {
        return this.#id
    }

    setId(id) {
        this.#id = id
        return this
    }

    getName() {
        return this.#name
    }

    setName(name) {
        this.#name = name
        return this
    }

    getPrice() {
        return this.#price
    }

    setPrice(price) {
        this.#price = price
        return this
    }

    data() {
        return { id: this.#id, name: this.#name, price: this.#price }
    }
}

module.exports = Product