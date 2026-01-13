const students = [
  {
    name: "Amit Sharma",
    class: "BCA FY",
    email: "amit.sharma@gmail.com",
    city: "Pune"
  },
  {
    name: "Sneha Patil",
    class: "BCA FY",
    email: "sneha.patil@gmail.com",
    city: "Mumbai"
  },
  {
    name: "Rahul Deshmukh",
    class: "BCA SY",
    email: "rahul.deshmukh@gmail.com",
    city: "Nagpur"
  },
  {
    name: "Pooja Kulkarni",
    class: "BCA SY",
    email: "pooja.kulkarni@gmail.com",
    city: "Nashik"
  },
  {
    name: "Rohit Jadhav",
    class: "BCA TY",
    email: "rohit.jadhav@gmail.com",
    city: "Kolhapur"
  },
  {
    name: "Neha Chavan",
    class: "BCA TY",
    email: "neha.chavan@gmail.com",
    city: "Satara"
  },
  {
    name: "Akash Pawar",
    class: "BCA FY",
    email: "akash.pawar@gmail.com",
    city: "Solapur"
  },
  {
    name: "Priya More",
    class: "BCA SY",
    email: "priya.more@gmail.com",
    city: "Ahmednagar"
  },
  {
    name: "Sanket Shinde",
    class: "BCA TY",
    email: "sanket.shinde@gmail.com",
    city: "Sangli"
  },
  {
    name: "Kajal Patil",
    class: "BCA FY",
    email: "kajal.patil@gmail.com",
    city: "Jalgaon"
  },
   {
    name: "saurabh shinde",
    class: "BCA FY",
    email: "saurabh.shinde@gmail.com",
    city: "Loni"
  }

];

let body = document.querySelector("body")

for(let i =0 ; i < students.length; i++){

    let card = document.createElement("div")
    card.classList.add("card")
    body.appendChild(card)

    let sname = document.createElement("h1")
    sname.textContent= `Name:- ${students[i].name}`
    card.appendChild(sname)

    let sclass = document.createElement("h2")
    sclass.textContent= `Class:- ${students[i].class}`
    card.appendChild(sclass)

    let semail = document.createElement("h2")
    semail.textContent=`Email:- ${students[i].email}`
    card.appendChild(semail)

    let scity = document.createElement("h2")
    scity.textContent= `City:- ${students[i].city}`
    card.appendChild(scity)

}