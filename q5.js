
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}


class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}


class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Invalid distance provided!");
        }

        const ratePerKm = 12; 
        return this.distance * ratePerKm;
    }
}


try {
    const user = new User("Rahul", 4.8);
    const driver = new Driver("Piyush", 4.9, "Maruti Swift");
    const trip = new Trip("Delhi", "Gurgaon", 20);

    console.log("User:", user.name, "Rating:", user.rating);
    console.log("Driver:", driver.name, "| Vehicle:", driver.vehicle);

    const fare = trip.calculateFare();
    console.log("Trip Fare:", fare);

} catch (err) {
    console.log("Error:", err.message);
}


try {
    const badTrip = new Trip("Delhi", "Noida", -5);
    console.log(badTrip.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}
