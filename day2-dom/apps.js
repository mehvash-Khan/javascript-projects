const button = document.querySelector('#add-btn')




const myList = document.querySelector('#job-list')
console.log(myList)
button.onclick = () => addText(document.querySelector('#job-input').value);

console.log(myList.innerHTML)

function addText(inputText){
    console.log('clicked')
    if(!inputText){
        return 
    }
    else{
        let newList = document.createElement('li')
        newList.innerHTML = inputText;
        return myList.append(newList);
    }
}

