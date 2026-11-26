
export default function load(){
let expenses = JSON.parse(localStorage.getItem("expenses")) ?? []
}



export function save(){
    localStorage.setItem("expenses",JSON.stringify(expenses))
    render();
}
