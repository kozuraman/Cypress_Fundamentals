module.exports = class Person
{
    age =25  //class variable - which don't changed
    get location() //properties
    {
        return "canada"
    }

    //constructor is method which executes by default when you create oject of the class
    constructor(firstName,lastName) //instance variable - 
    {
        this.firstName = firstName
        this.lastName =lastName
    }
    //methods
    fullName()
    {
       console.log(this.firstName+this.lastName)
    }

}
// let person = new Person("Raman","Koju")
// let person1 = new Person("chris","Koju")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName())

//object is the instance of the class

