function isGoodOffer(monthlySalary){
    return (monthlySalary*12)> 150000;
}


let greet = (name) => "Hello " + (name ?? 'Guest');

console.log(greet())

for(let i =0;i<20;i++){
    if (i%3 == 0 && i%5 == 0)
            console.log(i+"FizzBuzz")
       else if (i%3 == 0)
            console.log(i+ "Fizz")
        else if (i%5 == 0)
            console.log(i+"Buzz")
       
        


}

let experienceLevel = (years) => years>=7 ? "senior" : years>=3 && years<7 ? "Mid" : years < 3 && "Junior" 

