const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ''){
        alert('You must write something!')
    }
    else{
        let li = document.createElement('li');
        li.insertAdjacentHTML('afterbegin', inputBox.value);
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.insertAdjacentHTML('afterbegin', '\u00d7');
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData()
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData()
    }
}, false)

const storageKey = 'MyTodoListData';

function saveData(){
    localStorage.setItem(storageKey, listContainer.innerHTML);
}

function showTask(){
    const storedData = localStorage.getItem(storageKey);

    if(storedData) {
        listContainer.innerHTML = storedData;
    }
}

showTask();