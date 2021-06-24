const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', clickBtn2);

function clickBtn2() {
    alert("Clicked button 2");
}

function clickBtn3() {
    alert("Clicked button 3");
}

const btn4 = document.getElementById('btn4');
btn4.onclick = function () {
    alert("Clicked button 4");
};