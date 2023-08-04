const flag =true

if(!flag)
{
    console.log('condition satisfied')
}
else
{
    console.log(flag)
    console.log('condition not satisfied')
}

//while loop
let i =0
while(i<10)
{
    i++
    console.log('i aam inside loop')

}

//do -while loop
do
{
i++
}while(i<10);
console.log(i)

//for loop
for(let k=0;k<=10;k++)
{
    console.log(k)
}

//from 1 to 10 give me common multiple values of 2 and 5
console.log("*************************")
let n=0
for(let z=1;z<=100;z++)
{
    if(z%2 == 0 && z%5 ==0)
    {
        n++
        console.log(z)
        if(n==3)
        break

    }
}