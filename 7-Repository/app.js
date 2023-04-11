const Product = require("./Product");
const ProductRepository = require("./ProductRepository");


const product = new Product()
product.setId(1)
product.setName("Contoh 1")
product.setPrice(12000)

const repository = new ProductRepository()
repository.insert(product.data())

product.setPrice(20000)

repository.update(product.getId(), product.data())