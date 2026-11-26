
export function getTotal(expenses){
    
   return expenses.reduce((sum,expense)=> sum + expense.amount,0)
    
}

export function getUnpaid(expenses){
   return expenses.reduce((sum,expense)=>expense.paid?sum:sum+expense.amount,0)
   
   
}