const inputText = document.getElementById("Todotitle");
const list = document.getElementById("Todos")
const countdown = document.getElementsByClassName("countdown")[0];
let initialCount = 10;
function Countdown(){
    initialCount -= 1;
    countdown.innerText = initialCount;
    if (initialCount<0){
        clearInterval(timer);
    }
}

const timer = setInterval(Countdown, 1000)
const Todos = [];
function onclicksubmitbutton() {
    
    Todos.push(inputText.value);
    inputText.value="";
        Todos.forEach((todo) => {
            list.innerHTML += "<li>" + todo + "</li>";
        })
}