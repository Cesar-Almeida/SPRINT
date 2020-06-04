// vai procurar o a que está servindo como button 
const buttonsSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

buttonsSearch.addEventListener("click", ()=>{
    // vai add class hide
    modal.classList.remove("hide")
})
close.addEventListener("click", ()=>{
    // vai add class hide
    modal.classList.add("hide")
})
