function isGoodOffer(monthlySalary){
    return (monthlySalary*12)> 150000;
}


let greet = (name) => "Hello " + (name ?? 'Guest');

console.log(greet())

for(let i =0;i<20;i++){
        if (i%3 == 0)
            console.log("Fizz")
        else if (i%5 == 0)
            console.log("Buzz")
        else if (i%3 && i%5)
            console.log("FizzBuzz")
        


}

let experienceLevel = (years) => years>=7 ? "senior" : years>=3 && years<7 ? "Mid" : years < 3 && "Junior" 

