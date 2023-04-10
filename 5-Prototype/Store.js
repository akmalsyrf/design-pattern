class Store {
    name
    city
    country
    category

    constructor(name, city, country, category) {
        this.name = name
        this.city = city
        this.country = country
        this.category = category
    }

    /** */
    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
        return this
    }

    /** */
    getCity() {
        return this.city
    }

    setCity(city) {
        this.city = city
        return this
    }

    /** */
    getCountry() {
        return this.country
    }

    setCountry(country) {
        this.country = country
        return this
    }

    /** */
    getCategory() {
        return this.category
    }

    setCategory(category) {
        this.category = category
        return this
    }

    /** */
    clone() {
        const clone = Object.assign({}, this);
        Object.setPrototypeOf(clone, Store.prototype)
        return clone
    }

    log() {
        console.log(
            this.name,
            this.city,
            this.country,
            this.category
        )
    }
}

module.exports = Store