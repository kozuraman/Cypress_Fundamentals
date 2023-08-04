//Inheritance is the Main Piller in object oriented programming
//One class can inherit/acquire the properties,methods of another class
//The class which inherits the properties of other is know as subclass (derived class,child class)
//The class whose properties are inherited is know as superclass

const Person = require("./class");

class Pet extends Person
{
    get location()
    {
        return "BlueCross"
    }
    constructor(firstName,lastName)
    {
        //call parent class constructor
        super(firstName,lastName) //this keyword call the parent class constructor
    }
}

let pet = new Pet("sam","san")
pet.fullName()
console.log(pet.location)