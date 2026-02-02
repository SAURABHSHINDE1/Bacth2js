

// function Greet(){
    
//     alert("hello User")

// }


// let btn = document.querySelector(".btn")

// btn.onclick = function(){
//     alert("hello")
// }


// let btn = document.querySelector("#btn")

// btn.addEventListener("click" , ()=>alert("hello"))


// let box = document.querySelector(".box")

// box.addEventListener("click" , ()=>{
//     window.location.href = "https://www.youtube.com/"
// })

// const ElementStyle = ()=>{

//     box.style.backgroundColor = "red"
//     box.style.borderRadius = "20px"

// }

// box.addEventListener("click" , ElementStyle)


// let box = document.querySelector(".box")

// box.addEventListener('click' , (event)=>{

//     console.log(event)
// })

// box.addEventListener('dblclick' , (e)=>{
//     alert("Element  is doubble clicked")
//     console.log(e)
// })

// box.addEventListener("mouseenter" , ()=>{
//     box.style.borderRadius = "20px"
// })

// box.addEventListener("mouseleave" , ()=>{
//     box.style.backgroundColor = "teal"
// })

// box.addEventListener("mousemove", ()=>{
//     console.log("hello")
// })


// let icon = document.querySelector(".ri-menu-2-line")
// let card = document.querySelector(".card")


// icon.addEventListener("click" , ()=>{
//     card.classList.toggle("open")
// })


// let input = document.querySelector("#input")

// input.addEventListener('keydown' , (e)=>{

//     console.log(e.key)

//     if(e.key == "Enter"){
//         window.location.href="https://www.youtube.com/"
//     }

// })

// let formData = document.querySelector("#formData")

// formData.addEventListener("submit" , (e)=>{
//     e.preventDefault()
//      alert("from is submmited")

//     let name = document.querySelector("#username").value

//     let email = document.querySelector("#email").value

//    let data = {
//     name,
//     email
//    }

//    console.log(data)
// })  


// let username = document.querySelector("#username")

// username.addEventListener("focus", (e)=>{
  
//     console.log("you clicked on name field")
// })


// username.addEventListener("blur" , ()=>{
//     console.log("you lose the focus on name field")
// })


// let h2 = document.querySelector("h2")

// let parent = h2.parentNode
// console.log(parent)

// let box = document.querySelector(".box")

// let childs = box.childNodes

// console.log(childs)

// let firstChild = box.firstElementChild
// console.log(firstChild)

// let LastChild = box.lastElementChild
// console.log(LastChild)


let ptag = document.querySelector("p")

// let  preiviousElem = ptag.previousElementSibling
// console.log(preiviousElem)

let  naxtElem = ptag.nextElementSibling
console.log(naxtElem.textContent)