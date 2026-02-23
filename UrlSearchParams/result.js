
let result = new URLSearchParams(window.location.search)

console.log(result)

let studname = result.get("q")
let studage = result.get("age")

console.log(studname)
console.log(studage)

let body = document.querySelector("body")


let studentname = document.createElement("h2")
studentname.textContent = "Name:" + studname
body.appendChild(studentname)


let studentAge = document.createElement("h2")
studentAge.textContent = "Age:" + studage
body.appendChild(studentAge)