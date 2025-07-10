console.log("start")
const list = document.getElementById("list")

list.addEventListener("click",(event)=> {
    if(event.target.tagName === "LI") {
        console.log("clicked on: ",event.target.textContent)
    }
})

const newPro = document.createElement("li")
newPro.textContent = "Mobile Phone"
list.appendChild(newPro)

let debounceTimer;
const search = document.getElementById("search")

search.addEventListener("input", (event)=> {
    clearTimeout(debounceTimer)
    debounceTimer =setTimeout(()=>{
        console.log(event.target.value)
    },2000)    
})