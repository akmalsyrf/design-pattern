const CustomerBuilder = require("./CustomerBuilder");


const customer1 = new CustomerBuilder()
customer1.setId(1)
    .setFirstName("Budi")
    .setLastName("Gunawan")
    .setEmail("budigunawan@mail.com")
    .setPhone("0898078968756")
    .build()