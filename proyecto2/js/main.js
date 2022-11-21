const contador = document.getElementById("contar");
const sumar = document.getElementById("aumen");
const restar = document.getElementById("dis");
const rese = document.getElementById("reset");

let num = 0;

sumar.addEventListener("click",()=>{
    num++;
    contador.innerHTML = num;
});

restar.addEventListener("click",()=>{
    if(num== 0){}
    else{
        num--;
        contador.innerHTML = num;
    }
});

rese.addEventListener("click",()=>{
    num = 0;
    contador.innerHTML = num;
});