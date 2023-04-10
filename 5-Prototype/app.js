const Store = require('./Store')

const store1 = new Store("Toko 1", "Jakarta", "Indonesia", "Cloth")

const store2 = store1.clone()
store2.setName("Toko 2")
store2.setCategory("Electronic")

const store3 = store1.clone()
store3.setName("Toko 3")
store3.setCity("Bandung")

store1.log()
store2.log()
store3.log()