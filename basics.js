let variable="mehvash";

console.log(variable);


let person = new Object();
person ={
    name: "Mk",
    exp:"7",
    city:"Dubai"    
}


console.log(typeof(number))

console.log(`${person.name} has ${person.exp} years of experience and lives in ${person.city}` )


function salary(){
    let sal=15000
    let yearly_sal= sal*12
    console.log("yearly salary"+yearly_sal)
    if(yearly_sal>150000)
        return true
    else
        return false

}

console.log(salary())