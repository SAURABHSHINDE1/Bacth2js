

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


let box = document.querySelector(".box")

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


let icon = document.querySelector(".ri-menu-2-line")
let card = document.querySelector(".card")


icon.addEventListener("click" , ()=>{
    card.classList.toggle("open")
})