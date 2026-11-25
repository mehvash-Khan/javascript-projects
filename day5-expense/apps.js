
const expenseName = document.querySelector('#expense-name')
const expenseAmount = document.querySelector('#expense-amount')
const addButton = document.querySelector('#add-btn')
let expenseList = document.querySelector('#expense-list')

let expenses = JSON.parse(localStorage.getItem("expenses")) ?? []

render();

addButton.addEventListener('click',()=>{
    
    if (!expenseName.value || expenseAmount.value <= 0)
     return;
     else
        add(expenseName,expenseAmount);
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (!expenseName.value || expenseAmount.value <= 0)
        return;
        else
           add(expenseName,expenseAmount);
    }
})


function render(){
    let totalelement = document.getElementById("total")
    let total = expenses.reduce((sum,expense)=> sum + expense.amount,0)
    totalelement.textContent=total

    let pending = expenses.reduce((sum,expense)=>expense.paid?sum:sum+expense.amount,0)
     let pendingelement = document.getElementById("unpaid")
     pendingelement.textContent= pending
    
    expenseList.textContent = ""
    expenses.forEach((element,index) => {
        let li = document.createElement('li')
        let close = document.createElement('button')
        close.id = 'close-button'
        close.textContent='X'
        li.textContent=`${element.name}: ${element.amount} AED`
        li.append(close);
        expenseList.append(li)

        close.addEventListener('click',(event)=>{
            event.stopPropagation();
            expenses.splice(index, 1);
            save();
        })

        li.addEventListener('click',()=>{
            element.paid = !element.paid
            save();
        })
        if(element.paid)
        li.classList.toggle('toggle')
    });
}



function save(){
    localStorage.setItem("expenses",JSON.stringify(expenses))
    render();
}

function add(expenseName,expenseAmount){
    expenses.push({
        name: expenseName.value,
        amount: Number(expenseAmount.value),
        paid: false
      })
  localStorage.setItem("expenses",JSON.stringify(expenses)) 
  expenseName.value = ""
  expenseAmount.value = ""
  render();
}