class Screencast {
    #title
    #author
    #duration

    constructor(title, author, duration) {
        this.#title = title
        this.#author = author
        this.#duration = duration
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

    getDuration() {
        return this.#duration
    }

    setDuration(duration) {
        this.#duration = duration
    }
}

module.exports = Screencast