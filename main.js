const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const load = document.querySelector(".progress-bar-container")
const num = document.querySelector(".num")

button1.addEventListener("click", () =>{
    button2.classList.remove("inactive")
    load.classList.remove("inactive")
    button1.classList.add("inactive")

    
    let contador = 0
    setInterval(() =>{
        if(contador == 100){
            clearInterval();
            num.textContent = "loaded"
        }else{
            contador += 1;
            num.textContent = contador + "%";
        }
    }, 80)
    
})

button2.addEventListener("click", () =>{
    location.reload();
    
    
})


