const Customer = require("./Customer")

class CustomerBuilder {
    constructor() { }

    #id
    #firstName
    #lastName
    #email
    #phone

    setId(id) {
        this.#id = id
        return this
    }

    setFirstName(firstName) {
        this.#firstName = firstName
        return this
    }

    setLastName(lastName) {
        this.#lastName = lastName
        return this
    }

    setEmail(email) {
        this.#email = email
        return this
    }

    setPhone(phone) {
        this.#phone = phone
        return this
    }

    build() {
        return new Customer(
            this.#id,
            this.#firstName,
            this.#lastName,
            this.#email,
            this.#phone
        ).log()
    }
}

module.exports = CustomerBuilder