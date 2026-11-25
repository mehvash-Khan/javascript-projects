

// const myList = document.querySelector('#job-list')
const inputText = document.querySelector('#job-input');
const addButton = document.querySelector('#add-btn');
const myList = document.querySelector('#job-list');
   
    
    addButton.addEventListener("click",()=>{
        addList();   
    })

    inputText.addEventListener("keydown", function(event) {
    if(event.key == "Enter"){
    addList();
    
        }
    })


let jobs =JSON.parse(localStorage.getItem("jobs")) ?? []

function save(){
    localStorage.setItem("jobs",JSON.stringify(jobs))
    render(); 
}

function render(){
    myList.innerHTML='';
    jobs.forEach((job,index) =>{
        let item = document.createElement('li');
        item.textContent = job.name;

        if(job.done){
            item.classList.toggle('toggle')
           
            
        }
        item.addEventListener("click",() =>{
            job.done = !job.done;
            save();
            
           
            
        })  

        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'x'
        item.append(deleteButton)
        deleteButton.addEventListener("click",()=>{
          jobs.splice(index, 1);
          save();
        
        })
        myList.append(item);
        console.log(myList)
    })
}

function addList(){
    if(inputText.value){
        jobs.push({
            name: inputText.value,
            done: false
        })
    }
save();
inputText.value = "";
    
}

render();