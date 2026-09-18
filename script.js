// Complete the JS code

function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function () {
    return this.make + " " + this.model;
};


function SportsCar(make, model, topSpeed) {
    // Call Car constructor
    Car.call(this, make, model);

    // Add sports car property
    this.topSpeed = topSpeed;
}

// Inherit Car's prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set constructor back to SportsCar
SportsCar.prototype.constructor = SportsCar;

// SportsCar method
SportsCar.prototype.getTopSpeed = function () {
    return this.topSpeed;
};


// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;