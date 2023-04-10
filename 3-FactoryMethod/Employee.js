class Employee {
    constructor(name, title, salary) {
        this.name = name
        this.title = title
        this.salary = salary
    }

    log() {
        console.log(
            this.name,
            this.title,
            this.salary
        )
    }
}

module.exports = Employee