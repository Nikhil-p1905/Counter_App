const countValue = document.querySelector('#counter');//either queryselector 
// const countValue = document.getElementById('counter');//same using id

function increment() {
    let value = parseInt(countValue.innerText);
    value = value + 1;
    countValue.innerText = value;

};

function decrement(){
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;

};