class Customer {
    constructor(id, firstName, lastName, email, phone) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
    }

    log() {
        console.log(
            this.id,
            this.firstName,
            this.lastName,
            this.email,
            this.phone
        )
    }
}

module.exports = Customer