const counter = document.getElementById("counter");
const textBox = document.getElementById("text-box");

function countText(){
    const value = textBox.value;
    counter.innerText = `There is ${value.length} letter and ${value.split(" ").length} world`;
}

setInterval(countText, 2)