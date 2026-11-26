


function makeGreeter(prefix) {

    return function (name) {
        console.log(`${prefix} ${name}`);
    }
}

const introduction = makeGreeter("Hi, my name is ");
const welcome = makeGreeter("Welcome")

introduction("Mehmood")
introduction("Mehvash")


welcome("Mehmood")
welcome("Mehvash")


function makeMultiplier(x){
    function myfunc (number){
        return number*2
    }
    return myfunc
}

const number = makeMultiplier(2)
console.log(number(5));


function createAccount(startingBalance){
let balance = startingBalance

    function deposit(amount){
        balance = balance + amount
        
        
    }

    function withdraw(amount){
        balance = balance - amount
        
        
    }

    function getBalance(){
    return balance
    }

return {deposit, withdraw, getBalance}
   

}

const account = createAccount(1000)

account.deposit(50)
account.withdraw(50)
console.log(account.getBalance())

let count = 0
const button = document.querySelector('#button')
const message = document.querySelector('#message')
button.addEventListener('click',()=>{
    count++;
    message.textContent = `Clicked ${count} times`
}
)