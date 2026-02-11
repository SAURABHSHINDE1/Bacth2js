// console.log(" hello  i  am 1st")

// setTimeout(()=>{
//     console.log(" hello  i  am 2nd")

// console.log(" hello  i  am 3rd")
// } , 5000)

// console.log(" hello  i  am 4th")

// setTimeout
//  setTime out Tharavik vele nanter ekada execute hoto

// console.log("outside from setTime out")

// setTimeout(()=>{

//     console.log("hello")

// } , 4000)

// let box = document.querySelector(".box")

// setTimeout(()=>{

//     box.style.display = "none"

// } , 5000)

// setInterval

// setInterval(()=>{

//     console.log("hello")

// } , 2000)

// let date = new Date()

// let time = date.toLocaleTimeString()

// let h2 = document.querySelector("h2")
// h2.textContent = time

setInterval(() => {
  let date = new Date();

  let time = date.toLocaleTimeString();

  let h2 = document.querySelector("h2");
  h2.textContent = time;
},1000);


// let date = new Date()

// let day = date.getDate()
// console.log(day)


// let month = date.getMonth()
// console.log(month + 1)

// let year = date.getFullYear()
// console.log(year)


// let finalDate = `${day}/${month+1}/${year}`

// console.log(finalDate)