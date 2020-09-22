const btns = document.querySelectorAll(".time-punch");
btns.forEach(btn => btn.addEventListener("click",(e)=>{
    const now = new Date();
    let currentTime = now.getHours() + ":" + now.getMinutes();
    let div = e.target.parentNode;
    let input = div.querySelector("input");
    input.value = currentTime;
    
}));
