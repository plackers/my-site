const btn = document.querySelector('.button');

const btn1 = document.querySelector('.button1');

const link = document.querySelector('.data');

const input = document.getElementById("input1");

const newBox = document.createElement('div');

function print(){
    newBox.textContent = input.value;
    newBox.className = 'new';
    document.body.appendChild(newBox);
}
btn1.addEventListener('click', print);
function remove(){
    newBox.textContent = " ";
}
