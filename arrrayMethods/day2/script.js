
// // let arr = [20, 50, 56, 78, 99, 34, 23, 22, 11, 89, 90, 77, 37];

// // let arr = [
// //     {
// //         sname :"abc",
// //         age:24
// //     },

// //     {
// //         sname :"xyz",
// //         age:25
// //     },

// //     {
// //         sname :"wer",
// //         age:28
// //     },

// //     {
// //         sname :"hjrv",
// //         age:21
// //     },

// //     {
// //         sname :"ehfb",
// //         age:22
// //     }
// // ]



// // arr.forEach((elem)=>{
// //     console.log(elem.sname , elem.age)
// // })


// // const students = [
// //   { id: 1, name: "Amit Sharma", grade: "A", subject: "Math" },
// //   { id: 2, name: "Neha Verma", grade: "B", subject: "Science" },
// //   { id: 3, name: "Rahul Patil", grade: "A+", subject: "Computer" },
// //   { id: 4, name: "Pooja Singh", grade: "C", subject: "History" },
// //   { id: 5, name: "Rohan Mehta", grade: "B+", subject: "English" },
// //   { id: 6, name: "Sneha Kulkarni", grade: "A", subject: "Math" },
// //   { id: 7, name: "Kunal Desai", grade: "B", subject: "Geography" },
// //   { id: 8, name: "Anjali Joshi", grade: "A+", subject: "Science" },
// //   { id: 9, name: "Vikas More", grade: "C+", subject: "Economics" },
// //   { id: 10, name: "Priya Nair", grade: "B+", subject: "Computer" }
// // ];

// // let body = document.querySelector("body")

// // students.forEach((elem)=>{

// //         let box = document.createElement("div")
// //         box.className = "box"
// //         body.appendChild(box)

// //         let name = document.createElement("h2")
// //         name.textContent =`Name : ${elem.name} ` // to pass string + variables at a time 
// //         box.appendChild(name)

// //         let grade  = document.createElement("h2")
// //         grade.textContent =`Grade : ${elem.grade}`
// //         box.appendChild(grade)

// //         let sub = document.createElement("h2")
// //         sub.textContent = `Subject : ${elem.subject}`
// //         box.appendChild(sub)
// // })




// const mobileShop = [
//   {
//     id: 1,
//     brand: "Samsung",
//     model: "Galaxy S23",
//     price: 74999,
//     storage: "256GB",
//     color: "Black",
//     stock: 12
//   },
//   {
//     id: 2,
//     brand: "Apple",
//     model: "iPhone 14",
//     price: 69999,
//     storage: "128GB",
//     color: "Blue",
//     stock: 8
//   },
//   {
//     id: 3,
//     brand: "OnePlus",
//     model: "OnePlus 11",
//     price: 56999,
//     storage: "256GB",
//     color: "Green",
//     stock: 15
//   },
//   {
//     id: 4,
//     brand: "Xiaomi",
//     model: "Redmi Note 13 Pro",
//     price: 25999,
//     storage: "128GB",
//     color: "Purple",
//     stock: 20
//   },
//   {
//     id: 5,
//     brand: "Realme",
//     model: "Realme GT Neo 3",
//     price: 34999,
//     storage: "256GB",
//     color: "White",
//     stock: 10
//   },
//   {
//     id: 6,
//     brand: "Vivo",
//     model: "Vivo V29",
//     price: 32999,
//     storage: "128GB",
//     color: "Red",
//     stock: 9
//   },
//   {
//     id: 7,
//     brand: "Oppo",
//     model: "Oppo Reno 10",
//     price: 38999,
//     storage: "256GB",
//     color: "Silver",
//     stock: 7
//   },
//   {
//     id: 8,
//     brand: "Motorola",
//     model: "Edge 40",
//     price: 29999,
//     storage: "128GB",
//     color: "Black",
//     stock: 14
//   },
//   {
//     id: 9,
//     brand: "Nothing",
//     model: "Phone (2)",
//     price: 44999,
//     storage: "256GB",
//     color: "White",
//     stock: 6
//   },
//   {
//     id: 10,
//     brand: "Infinix",
//     model: "Zero 30",
//     price: 21999,
//     storage: "128GB",
//     color: "Gold",
//     stock: 18
//   },

//   {
//     id: 11,
//     brand: "Vivo",
//     model: "Vivo V30",
//     price: 33999,
//     storage: "128GB",
//     color: "Red",
//     stock: 9
//   },
// ];



// let filteredData = mobi
// leShop.filter((elem)=> elem.price <= 50000)

// console.log(filteredData)


// filteredData.forEach((elem)=>{
//     console.log(elem)
// })


// const  add =()=>{
//      let a = 24
//      let b = 78

//     return a + b 
// }

// let result  = add()

// console.log( "the addition is :",result)