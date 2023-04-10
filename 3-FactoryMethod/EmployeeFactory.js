const Employee = require("./Employee")

class EmployeeFactory {
    constructor() { }

    createManager(name) {
        return new Employee(name, "Manager", 10000000).log()
    }

    createStaff(name) {
        return new Employee(name, "Staff", 5000000).log()
    }
}

module.exports = EmployeeFactory