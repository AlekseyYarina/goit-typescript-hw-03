class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  constructor(public door: boolean, public key: Key) {}
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("Person entered the house.");
    } else {
      console.log("The door is closed. Person cannot enter the house.");
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(keyOfPerson: Key): void {
    if (keyOfPerson.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is now open.");
    } else {
      console.log("Invalid key. The door remains closed.");
    }
  }
}

const key = new Key();
const house = new MyHouse(false, key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
