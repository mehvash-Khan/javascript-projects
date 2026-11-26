
import {load,save} from './storage.js'
import { getTotal, getUnpaid } from './totals.js'
const expenseName = document.querySelector('#expense-name')
const expenseAmount = document.querySelector('#expense-amount')
const addButton = document.querySelector('#add-btn')
let expenseList = document.querySelector('#expense-list')


let expenses = load();
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
    let total =   getTotal(expenses)
    totalelement.textContent=total

    let pending = getUnpaid(expenses)
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
           update();
        })

        li.addEventListener('click',()=>{
            element.paid = !element.paid
          update();
        })
        if(element.paid)
        li.classList.toggle('toggle')
    });
}




function add(expenseName,expenseAmount){
    expenses.push({
        name: expenseName.value,
        amount: Number(expenseAmount.value),
        paid: false
      })
 
  expenseName.value = ""
  expenseAmount.value = ""
update();
}


function update(){
    save(expenses);
    render();
}