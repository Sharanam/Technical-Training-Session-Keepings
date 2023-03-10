console.clear();


class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
class Tesla extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myTesla = new Tesla("Tesla", "Model X");
console.log(myTesla.show());

let myCar = new Car("Ford");
console.log(myCar.present());

// ------------------------------

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

let array3 = array1.concat(array2);
console.log(array3);
array3 = [...array1, ...array2];
console.log(array3);