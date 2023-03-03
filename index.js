const inputBtn = document.getElementById("input-btn")
let myLeads = ["www.awesome.com","www.google.com"]
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){ 
        myLeads.push(inputEl.value)  
})

for (let i = 0; i < myLeads.length; i++){
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    // OR
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}