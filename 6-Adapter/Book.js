class Book {
    #title
    #author

    constructor(title, author) {
        this.#title = title
        this.#author = author
    }

    getTitle() {
        return this.#title
    }
    setTitle(title) {
        this.#title = title
    }

    getAuthor() {
        return this.#author
    }

    setAuthor(author) {
        this.#author = author
    }
}

module.exports = Book