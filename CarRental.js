class CarRental {
    constructor(company) {
        this.list = [];
        this.company = company;
    }

    addCar(name, color, price) {
        let cars = { name, color, price, worko: true }
        this.list.push(cars);
        console.log(cars);
    }

    intro() {
        let count = 0;
        //kiek geru masinu
        for (let i = 0; i < this.list.length; i++) {
            const autos = this.list[i];
            if (autos.worko === true) {
                count++
            }
        }

        //atspausdinti
        console.log(` Hi, we are ${this.company} and we have ${count} cars available.`);
    }

    carPark() {
        let count = 0;

        for (let i = 0; i < this.list.length; i++) {
            const autos = this.list[i];
            if (autos.worko === true) {
                count++
                console.log(`${count}. ${autos.name} (${autos.color}) is for ${autos.price}EUR/day.`);
            }

        }
    }
    updateCarPrice(index, naujaKaina) {
        this.list[index].price = naujaKaina;
    }
    carAccident(index) {
        this.list[index].worko = false;

    }
    carRepair(index) {
        this.list[index].worko = true;
    }
    removeCar(index) {
        const updatedList = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }

        this.list = updatedList;
    }
}
module.exports = CarRental;