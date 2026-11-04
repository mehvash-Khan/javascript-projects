const button = document.querySelector('#add-btn')
let jobs =  JSON.parse(localStorage.getItem('jobs') ?? '[]');





const myList = document.querySelector('#job-list')
const inputText = document.querySelector('#job-input');

for( i of jobs){
    
    
    let newList = document.createElement('li')
    newList.textContent = i;
    let button = addCloseButton();
    newList.append(button)
    button.addEventListener("click", () =>{
        newList.remove();
    })

    newList.addEventListener("click",() =>{

        newList.classList.add('toggle');
    })


    myList.append(newList);
}


button.addEventListener("click", () => { addList(); resetValue();} )
inputText.addEventListener("keydown", function(event) {
    
    if(event.key == "Enter"){
        addList();
        resetValue();
    }
})

console.log(myList.innerHTML)

function addList(){
    
   
    if(!inputText.value){
        return 
    }
    else{
        let newList = document.createElement('li')
        newList.textContent = inputText.value;
        let button = addCloseButton();
        newList.append(button)
        button.addEventListener("click", () =>{
            newList.remove();
        })

        newList.addEventListener("click",() =>{

            newList.classList.add('toggle');
        })


        myList.append(newList);
        jobs.push(inputText.value);
        localStorage.setItem("jobs",JSON.stringify(jobs))
       

    }
}

function resetValue(){
    document.querySelector('#job-input').value=""
}

function addCloseButton(){
    let button = document.createElement('button')
    button.id = 'closeButton'
    button.innerText='x';
   return button
}




console.log(localStorage)

