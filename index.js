let countEl = document.getElementById("count-el")
let count = 0
function increment(){
     count += 1
     countEl.innerText = count
   }
   
function save(){
    console.log(count)
}

let welcomeEl = document.getElementById("wellcome-el")
// let name = " your name"
let greeting = "WELCOME BACK"

welcomeEl.innerText = greeting + name

welcomeEl.innerText += "👋"


let saveEl = document.getElementById("save-el")


function save(){
    let countStr = count +" - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
    
}


