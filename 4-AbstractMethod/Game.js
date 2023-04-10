class Game {
    constructor(gameFactory) {
        this.level = gameFactory.createLevel()
        this.arena = gameFactory.createArena()
        this.enemy = gameFactory.createEnemy()
    }

    start() {
        this.level.start()
        this.arena.start()
        this.enemy.start()
    }
}

module.exports = Game