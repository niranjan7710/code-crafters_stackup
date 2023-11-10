const board = document.getElementById("board")
const add_bt = document.getElementById("add_bt")

var div = null
var database = []

const add_tile = ()=>{
    div = document.createElement('div')
    div.classList.add("to-do-item")
    div.id = `to-do-list-${database.length}`
    database.push(div)

    div = document.createElement('button')
    div.classList.add("check-box")
    div.innerHTML = `<ion-icon name="checkmark-outline" size="large"></ion-icon>`
    database[database.length-1].appendChild(div)

    div = document.createElement('input')
    div.classList.add("content")
    div.type = "text"
    database[database.length-1].appendChild(div)

    div = document.createElement('button')
    div.classList.add("check-box")
    div.innerHTML = `<ion-icon name="close-outline" size="large"></ion-icon>`
    // div.onclick = del_tile
    database[database.length-1].appendChild(div)

    rend()

    // board.innerHTML += `
    // <div class="to-do-item">
    //     <button class="check-box">X</button>
    //     <input type="text" class="content"></input>
    // </div>
    // <div class="to-do-item">
    //     <button class="check-box">X</button>
    //     <input type="text" class="content"></input>
    // </div>
    // <button class="add-bt" id="add_bt" onclick="add_tile()">+</button>
    // `
}
const rend = () => {
    board.replaceChildren()

    database.forEach(data => {
        board.appendChild(data)
    });
    
    div = document.createElement('button')
    div.classList.add("add-bt")
    div.id = `add_bt`
    div.onclick = add_tile
    div.innerHTML = `<ion-icon name="add-outline" size="large"></ion-icon>`
    board.appendChild(div)
}
const del_tile = (o) => {
    // database.remove(0)
    o.remove
    rend()
}