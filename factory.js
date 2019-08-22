function Car(name) {
  this.name = name;
  this.type = '4 Wheeler';
}
function Bike(name) {
  this.name = name;
  this.type = '2 Wheeler';
}

function VehicleFact() {
  this.create = (name, type) => {
    switch (type) {
      case 2:
        return new Bike(name);
        break;
      case 4:
        return new Car(name);
        break;
    }
  }
}

function say() {
  console.log("Hi I am a:" + this.name + "with a " + this.type);
}

const vf = new VehicleFact();
const car = vf.create('Honda', 4);
say.call(car)
