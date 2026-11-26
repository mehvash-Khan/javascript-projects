
export function load(){
    return JSON.parse(localStorage.getItem("expenses")) ?? []

}



export function save(expenses){
    localStorage.setItem("expenses",JSON.stringify(expenses))
    
}
