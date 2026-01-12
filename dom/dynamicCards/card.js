// let heading = document.createElement("h1")
// console.log(heading)

// heading.textContent = " hello DreamsGuider"
// heading.className= "text"

let h1 = document.querySelector("h1")
// h1.classList.add("heading")

// h1.classList.remove("test")

// h1.className="heading"

// h1.id="abc"


// let body = document.querySelector("body")

// let heading = document.createElement("h1")
// heading.textContent= "hello DreamsGuider"

// body.appendChild(heading)

let body = document.querySelector("body")


    let card = document.createElement("div")
card.className = "card"
body.appendChild(card)

let sname = document.createElement("h1")
sname.textContent = "Name :- Vivek"
card.appendChild(sname)


let sclass = document.createElement("h2")
sclass.textContent = "Class :- BCS"
card.appendChild(sclass)


let address = document.createElement("h2")
address.textContent= "Address :- pune"
card.appendChild(address)

let mobile = document.createElement("h2")
mobile.innerText = "Mobile No:- 23456789"
card.appendChild(mobile)


