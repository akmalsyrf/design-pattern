const Game = require('./Game')
const { GameFactoryEasy, GameFactoryMedium, GameFactoryHard } = require('./GameFactory')

const gameEasy = new Game(new GameFactoryEasy())
gameEasy.start()

const gameMedium = new Game(new GameFactoryMedium())
gameMedium.start()

const gameHard = new Game(new GameFactoryHard())
gameHard.start()