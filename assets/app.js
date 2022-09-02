let items = document.querySelectorAll(".items")
let box = document.querySelectorAll(".box")
items.forEach((e)=>{
    e.addEventListener("dragstart" , ()=>{
        e.classList.add("dragging")
    })
    e.addEventListener("dragend" , ()=>{
        e.classList.remove("dragging")
    })
})

box.forEach((e)=>{
    e.addEventListener("dragover" , ()=>{
        const items = document.querySelector(".dragging")
        e.append(items)
    })
})