const Book = require('./Book')

class BookCatalogAdapter {
    #book

    constructor(book) {
        this.#book = book
    }

    getCatalogTitle() {
        return this.#book.getTitle() + " by " + this.#book.getAuthor()
    }
}

module.exports = BookCatalogAdapter