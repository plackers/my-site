const btn = document.querySelector('.button');
const btn1 = document.querySelector('.button1');
const input = document.getElementById("input1");
const list = document.getElementById('list');
const btn2 = document.querySelector('.button2');

function print() {
    if (input.value.trim() === "") return;

    let newItem = document.createElement('li');
    newItem.textContent = input.value;

    list.appendChild(newItem);

    input.value = ""; // Clear the input after adding
}

btn1.addEventListener('click', print);

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        print();
    }
});

function remove() {
    list.textContent = "";
}

btn2.addEventListener('click', remove);

function download(){
    alert("downloading...");
}
btn.addEventListener('click', download);
