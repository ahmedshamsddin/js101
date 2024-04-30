class ia_Vehicle {
    constructor(company, model) {
        this.company = company;
        this.model = model;
    }

    start () {
        return "Engine Started";
    }

    stop () {
        return "Engine Stopped";
    }
}

class ia_Car extends ia_Vehicle {
    constructor(company, model, year) {
        super(company, model);
        this.year = year;
    }

    start () {
        return "Car Engine Started";
    }
}

const ia_car = new ia_Car("Fiat", "Doblo", 2015);
console.log(ia_car.company);
console.log(ia_car.model);
console.log(ia_car.year);
console.log(ia_car.start());
console.log(ia_car.stop());
