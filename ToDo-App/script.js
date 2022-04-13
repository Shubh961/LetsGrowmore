const inputBox = document.querySelector("input")

const submitBtn = document.getElementById("submit-btn")

const todos = document.getElementById("todos")

let submitForm = document.getElementById("add-task").addEventListener("submit", function(event) {
    event.preventDefault()
})

submitBtn.addEventListener("click", function() {
    const node = document.createElement("li")
    const textNode = document.createElement("span")
    const crossBtn = document.createElement("button")
    const tickHidden = document.createElement("span")

    textNode.append(document.createTextNode(inputBox.value))
    crossBtn.classList.add("cross-btn")
    
    textNode.classList.add("text-todo")
    crossBtn.appendChild(document.createTextNode("\u2716"))
    
    node.appendChild(tickHidden)
    node.appendChild(textNode)
    node.appendChild(crossBtn)
    
    document.getElementById("todos").appendChild(node)
    inputBox.value = ''
    console.log("Clicked")
    
    crossBtn.addEventListener("click", function() {
        // const strikeTextNode = document.createElement("span")
        // const strikeText = document.createElement("s")
        const tickVisible = document.createElement("span")
        
        tickVisible.classList.add("tick")
        tickVisible.appendChild(document.createTextNode("\u2713"))
        // strikeText.appendChild(document.createTextNode(inputBox.value))
        // strikeText.classList.add("text-todo")
        // strikeTextNode.appendChild(strikeText)
        // textNode.replaceWith(strikeTextNode)
        tickHidden.replaceWith(tickVisible)
        textNode.classList.add("strike")
    })
})


