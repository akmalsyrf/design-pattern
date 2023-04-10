const { LevelEasy, LevelMedium, LevelHard } = require("./Level")
const { ArenaEasy, ArenaMedium, ArenaHard } = require('./Arena')
const { EnemyEasy, EnemyMedium, EnemyHard } = require('./Enemy')

class GameFactoryEasy {
    createLevel() {
        return new LevelEasy()
    }

    createArena() {
        return new ArenaEasy()
    }

    createEnemy() {
        return new EnemyEasy()
    }
}

class GameFactoryMedium {
    createLevel() {
        return new LevelMedium()
    }

    createArena() {
        return new ArenaMedium()
    }
    createEnemy() {
        return new EnemyMedium()
    }
}

class GameFactoryHard {
    createLevel() {
        return new LevelHard()
    }

    createArena() {
        return new ArenaHard()
    }
    createEnemy() {
        return new EnemyHard()
    }
}

module.exports = {
    GameFactoryEasy,
    GameFactoryMedium,
    GameFactoryHard
}