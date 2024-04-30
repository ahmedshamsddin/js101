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

const ia_vehicle = new ia_Vehicle("Toyota", "Camry");
console.log(ia_vehicle.company);
console.log(ia_vehicle.model);
console.log(ia_vehicle.start());
console.log(ia_vehicle.stop());

//في الحل constructor تأكد من اسمتخدام

// Test case: 
// console.log(ia_vehicle.company);
// console.log(ia_vehicle.model);
// console.log(ia_vehicle.start());
// console.log(ia_vehicle.stop());

// Expected output:
// Toyota
// Camry
// Engine Started
// Engine Stopped