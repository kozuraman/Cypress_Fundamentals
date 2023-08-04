const Person = require('./class')

let day = 'tuesday '
console.log(day.length) //8
let subDay = day.slice(0,5)
console.log(subDay)
console.log(day[1])

// tue day
let splitDay = day.split("s")
console.log(splitDay[1].length)
console.log(splitDay.trim())

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
console.log(diff.toString())

let newQuote = day+ "is funday day"
console.log(newQuote)
let val=newQuote.indexOf("day",5)
console.log(val)

//tuesday is funday
let count =0
let value=newQuote.indexOf("day",5)
while(value!== -1)
{
    count++ //2
    value=newQuote.indexOf("day",value+1)
}
console.log(count)

let person = new Person ('chris','edward')
console.log (person.fullName())

