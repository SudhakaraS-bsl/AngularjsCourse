
function nameFilterFactory() {
    return function (Input) {
        // do the required logic before retun
        return "Added new text by custom filter || " + Input;
    };
}
// Prototypal inheritance

var parent = {
    value: "parentValue",
    obj: { objValue: "parentObjValue" },
    walk: function () {
        console.log('walking.!');
    }
};

var child = Object.create(parent);

console.log('Child - child.value:', child.value);
console.log('Child - child.obj.objValue:', child.obj.objValue);
console.log('Parent - parent.value:', parent.value);
console.log('Parent - parent.obj.objValue:', parent.obj.objValue);
console.log('Child:', child);
console.log('Parent:', parent);

child.value = 'childValue';
child.obj.objValue = 'childObjValue';

console.log('**CHANGED - Child - child.value:', child.value);
console.log('**CHANGED - Child - child.obj.objValue:', child.obj.objValue);

console.log('Child - child.value:', child.value);
console.log('Child - child.obj.objValue:', child.obj.objValue);
console.log('Parent - parent.value:', parent.value);
console.log('Parent - parent.obj.objValue:', parent.obj.objValue);
console.log('Child:', child);
console.log('Parent:', parent);

console.log("child.obj == parent.obj?", child.obj === parent.obj);

var grandChild = Object.create(child);
console.log("grandChild", grandChild);
grandChild.walk();

function Dog(name) {
    this.name = name;
    console.log("'this' is: ", this);
}

var myDog = new Dog('Max');
console.log("myDog: ", myDog);

var myDog1 = Dog('Max1');
console.log("myDog1: ", myDog1);

class Car {
    carName;
    constructor(_carName) { this.carName = _carName; }

    DisplayCarName() {
        return 'I have ' + this.carName + ' car';
    }
}
class Model extends Car {
    carModel;
    constructor(_carModel, _carName) {
        super(_carName);
        this.carModel = _carModel;
    }
    DisplayCarModel() {
        return this.DisplayCarName() + ' and model is ' + this.carModel;

    }
}
