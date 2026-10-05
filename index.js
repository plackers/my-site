const btn = document.querySelector('.button');

const btn1 = document.querySelector('.button1');

const input = document.getElementById("input1");

const list = document.getElementById('list');

const btn2 = document.querySelector('.button2');

let newItem = document.createElement('li');

function print(){
    list.textContent = input.value;
    list.className = 'new';
    list.appendChild(newItem);
}
btn1.addEventListener('click', print);
function remove(){
    list.textContent = " ";
}
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        print();
    }
});
btn2.addEventListener('click',remove);
