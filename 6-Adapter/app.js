const Book = require("./Book")
const BookCatalogAdapter = require("./BookCatalogAdapter");
const Screencast = require('./Screencast')
const ScreencastAdapter = require("./ScreencastAdapter");

const list = []

list.push(new BookCatalogAdapter(new Book("Clean Code", "Bill Gates")))
list.push(new BookCatalogAdapter(new Book("Design Pattern", "Mark Zuckerberg")))

list.push(new ScreencastAdapter(new Screencast("Docker", "Satya Nadella", 100)))
list.push(new ScreencastAdapter(new Screencast("Swift", "Tim Cook", 100)))

list.forEach(item => {
    console.log(item.getCatalogTitle())
})