let cheeseQuantity = 0
let sodaQuantity = 0
let friesQuantity = 0
let total = 0

let cheesePlusBtn = document.getElementById("cheesePlus")
let sodaPlusBtn = document.getElementById("sodaPlus")
let friesPlusBtn = document.getElementById("friesPlus")

let cheeseMinusBtn = document.getElementById("cheeseMinus")
let sodaMinusBtn = document.getElementById("sodaMinus")
let friesMinusBtn = document.getElementById("friesMinus")

let cheeseAmountSpn = document.getElementById("cheeseAmount")
let sodaAmountSpn = document.getElementById("sodaAmount")
let friesAmountSpn = document.getElementById("friesAmount")

let cheeseTotalSpn = document.getElementById("cheeseTotal")
let sodaTotalSpn = document.getElementById("sodaTotal")
let friesTotalSpn = document.getElementById("friesTotal")

let totalP = document.getElementById("total");

cheesePlusBtn.addEventListener("click", () => {
    cheeseQuantity++
    total+=10
    cheeseAmountSpn.innerText = cheeseQuantity
    cheeseTotalSpn.innerText = "$" + cheeseQuantity*10
    totalP.innerText = "Total: $" + total
})

sodaPlusBtn.addEventListener("click", () => {
    sodaQuantity++
    total+=3
    sodaAmountSpn.innerText = sodaQuantity
    sodaTotalSpn.innerText = "$" + sodaQuantity*3
    totalP.innerText = "Total: $" + total
})

friesPlusBtn.addEventListener("click", () => {
    friesQuantity++
    total+=5
    friesAmountSpn.innerText = friesQuantity
    friesTotalSpn.innerText = "$" + friesQuantity*5
    totalP.innerText = "Total: $" + total
})

cheeseMinusBtn.addEventListener("click", () => {
    if(cheeseQuantity>0){
        cheeseQuantity--
        total-=10
    }
    cheeseAmountSpn.innerText = cheeseQuantity
    cheeseTotalSpn.innerText = "$" + cheeseQuantity*10
    totalP.innerText = "Total: $" + total
})

sodaMinusBtn.addEventListener("click", () => {
    if(sodaQuantity>0){
        sodaQuantity--
        total-=3
    }
    sodaAmountSpn.innerText = sodaQuantity
    sodaTotalSpn.innerText = "$" + sodaQuantity*3
    totalP.innerText = "Total: $" + total
})

friesMinusBtn.addEventListener("click", () => {
    if(friesQuantity>0){
        friesQuantity--
        total-=5
    }
    friesAmountSpn.innerText = friesQuantity
    friesTotalSpn.innerText = "$" + friesQuantity*5
    totalP.innerText = "Total: $" + total
})