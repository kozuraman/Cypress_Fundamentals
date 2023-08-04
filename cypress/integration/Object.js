//An object is the collection of the properties
let person ={

    firstName:'Tim',
    lastName: 'joe',
    age:24,
    fullName: function()
    {
        console.log(this.firstName+this.lastName)
    }
}

console.log(person.fullName())
console.log(person.lastName)
console.log(person['lastName']) //access from the array
person.firstName = 'raman'
console.log(person.firstName)
person.gender = 'male'
console.log(person)
delete person.gender
console.log(person)

console.log('gender' in person)

//print all the value of the javascript object

for(let key in person)
{
    console.log(person[key])
}