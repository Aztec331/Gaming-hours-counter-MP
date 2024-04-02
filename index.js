let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // reset the count of the count-el element to 0
    countEl.textContent = 0
    //start the count element again from 0 
    count=0
}

