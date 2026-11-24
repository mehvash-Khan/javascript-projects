// const button = document.querySelector('#add-btn')
// let jobs =  JSON.parse(localStorage.getItem('jobs') ?? '[]');





// const myList = document.querySelector('#job-list')
 const inputText = document.querySelector('#job-input');


// for( i of jobs){
//     let newList = document.createElement('li')
//     newList.textContent = i;
//     let button = addCloseButton();
//     newList.append(button)
//     button.addEventListener("click", () =>{
//         deleteButton(newList);
//     })

//     newList.addEventListener("click",() =>{

//         newList.classList.toggle('toggle');
//     })
//     myList.append(newList);
// }





// function addList(){
    
//    let input = inputText.value;
//     if(!input){
//         return 
//     }
//     else{
//         let newList = document.createElement('li')
//         newList.textContent = input;
//         let button = addCloseButton();
//         newList.append(button)
//         button.addEventListener("click", () =>{
//          deleteButton(newList);
//         })

//         newList.addEventListener("click",() =>{

//             newList.classList.add('toggle');
//         })


//         myList.append(newList);
//         jobs.push(input);
//         localStorage.setItem("jobs",JSON.stringify(jobs))
       

//     }
// }

// function resetValue(){
//     document.querySelector('#job-input').value=""
// }

// function addCloseButton(){
//     let button = document.createElement('button')
//     button.id = 'closeButton'
//     button.innerText='x';
//    return button
// }


// function deleteButton(list){
    
   
//  input = list.innerText.slice(0,-1)

//      console.log(input)
  
//     jobs = jobs.filter(job =>job !== input)
  
//      localStorage.setItem("jobs",JSON.stringify(jobs))
     

    
    
// }




let jobs =JSON.parse(localStorage.getItem("jobs")) ?? []

function save(){

    localStorage.setItem("jobs",JSON.stringify(jobs))
    render();
    
}

function render(){

    const inputText = document.querySelector('#job-input');
    const addButton = document.querySelector('#add-btn');
    const myList = document.querySelector('#job-list');
    myList.innerHTML='';
    
    addButton.addEventListener("click",()=>{
        addList();   
    })

    inputText.addEventListener("keydown", function(event) {
    if(event.key == "Enter"){
    addList();
    
        }
    })

   
    jobs.forEach((job,index) =>{
        let item = document.createElement('li');
        item.innerHTML = job.name;
       
       

        if(job.done){
            item.classList.toggle('toggle')
           
            
        }
        item.addEventListener("click",() =>{
            job.done = !job.done;
            
           
            
        })  

        let deleteButton = document.createElement('button')
        deleteButton.innerHTML = 'x'
        item.append(deleteButton)
        deleteButton.addEventListener("click",()=>{
          jobs = jobs.filter((job) => job.name !== item.textContent.slice(0,-1))
          save();
         item.remove();
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
    
}

render();