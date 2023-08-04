var marks = Array(6)
 
var marks = new Array(20,40,35,12,37,100)

var marks = [20,40,35,12,37,100]

console.log(marks[2]) //35

marks[3] = 14
console.log(marks[3]) 
console.log(marks.length) //6 
marks.push(65)
console.log(marks) // append at the end
marks.pop() //delete the last element
marks.unshift(12) //append at the beginning
console.log(marks)

console.log(marks.indexOf(100)) // Tell the index of the array

// 120 in the array is present or not
console.log(marks.includes(120)) //checks it present or not - return false if not 

var marks = [20,40,35,12,37,100] //Created the sub array from the array
subMarks =marks.slice(2,5)
console.log(subMarks)

var sum = 0
for(i=0;i<marks.length;i++)
{
    //console.log(marks[i])
    sum = sum + marks[i]
    console.log(sum)
}

//reduce filter map
let total = marks.reduce((sum,mark) =>sum+mark,0)

//Create new array with even numbers of scores array 
var scores = [12,13,14,15,16]
var evenScores =[]
for(let i=0;i<=scores.length;i++)
{
    if(scores[i]%2 == 0)
    {
        evenScores.push(scores[i])
    }
}
console.log(evenScores)

let newFilterEvenScores =scores.filter(score=>score%2==0)
console.log(newFilterEvenScores)

//Map- Create new array with even numbers of scores and multiply each value

let mappedArray = newFilterEvenScores.map(score=>score*3) // maps from one value to another value
console.log(mappedArray)

//Create new array with even numbers of scores and multiply each value and sum them
let totalVal = mappedArray.reduce((sum,val) =>sum + val,0)
console.log(totalVal)

let sumValue = scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val) =>sum + val,0)
console.log(sumValue)

//sorting
let fruits =["banana","mango","pomegranate","apple"]

console.log(fruits.sort())
console.log(fruits.reverse())

var score1 = [12,3,19.16,14]
console.log(score1.sort())
score1.sort(function(a,b){
    return a-b
})
console.log(score1.sort((a,b) => a-b))
