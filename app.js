//Select Items//
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

//edit option//
let editElement;
let editFlag = false;
let editID = "";

//event listeners//
//submit form//
form.addEventListener('submit',addItem)

//functions//
function addItem(e){
    e.preventDefault();
    const value =- grocery.value;
    const id = new Date().getTime().toString()
    if(value && !editFlag){
        const element = document.createElement('article');
        element.classList.add('grocery-item')
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `  <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn"><i class="fas fa-edit"></i></button>
            <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
        </div>`;
        //append child
        list.appendChild(element)
        displayAlert("Item added to the list", "success")
        container.classList.add('show-container');
        addToLocalStorage(id,value);
        setBackToDefault()
    }
    else if(value && editFlag){}
    else{
        displayAlert("Please enter value", "danger")
    }
}
//display alert 
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

//remove alert
setTimeout(function(){
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`)
},1000)
}
//local storage //
function addToLocalStorage(id,value){
    console.log("added to local storage")
}


//setup items //