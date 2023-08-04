//block of code can execute by wrapping on the model
//var - global level/functional
//let global level/block level{}
//const - can't reinitialized

var greet ="Evening"
greet ="Night" // reinitialized

if (1==1)
{
    var greet ="Afternoon"
}
function add(a,b)
{
   
    var greet = "Morning"
    return a+b
    

}

let sum = add(2,3)
console.log(sum)
console.log(greet)
//do not have name =>Anyonymus function -- function expressions

let sumOfIntegers = function(c,d)
{
    return c+d
}

let sumOfNumbers = (c,d) => c=d
console.log(sumOfNumbers(2,3))
