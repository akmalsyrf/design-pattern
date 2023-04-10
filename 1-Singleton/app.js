const OrderService = require("./OrderService")
const OrderDetailService = require('./OrderDetailService')

const orderService = new OrderService()
orderService.save("0001")

const orderDetailService = new OrderDetailService()
orderDetailService.save("0001", "Indomie")
orderDetailService.save("0001", "Sabun")