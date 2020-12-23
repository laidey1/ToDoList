let form = document.getElementById('myForm');
let itemList = document.getElementById('items');

form.addEventListener('submit' , addItem);
itemList.addEventListener('click' ,removeItem);

function addItem(e){
    e.preventDefault();
    let newItem = document.getElementById('task').value;
    let li = document.createElement('li');
    li.className= 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);
       
}
function ClearText(){
    document.getElementById("task").value="";
}

function removeItem(e){
    if(e.target.classList.contains('list-group-item')){
              itemList.remove('li');
    }
}

