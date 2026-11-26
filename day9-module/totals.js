
export function getTotal(expenses){
    let totalelement = document.getElementById("total")
    let total = expenses.reduce((sum,expense)=> sum + expense.amount,0)
    totalelement.textContent=total
}

export function getUnpaid(expenses){
    let pending = expenses.reduce((sum,expense)=>expense.paid?sum:sum+expense.amount,0)
    let pendingelement = document.getElementById("unpaid")
    pendingelement.textContent= pending
   
}