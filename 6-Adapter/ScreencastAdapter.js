const Screencast = require('./Screencast')

class ScreencastAdapter {
    #screencast

    constructor(screencast) {
        this.#screencast = screencast
    }

    getCatalogTitle() {
        return this.#screencast.getTitle() + " by " + this.#screencast.getAuthor()
    }
}

module.exports = ScreencastAdapter