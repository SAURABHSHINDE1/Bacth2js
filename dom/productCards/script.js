const products = [
    {
        productName:"Mobile",
        Price:40000,
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fugiat?"
    },

    {
        productName:"Laptop",
        Price:56000,
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fugiat?"
    },

    {
        productName:"Tv",
        Price:30000,
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fugiat?"
    },


    {
        productName:"Washing Machine",
        Price:45000,
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fugiat?"
    },

    {
        productName:"Sofa",
        Price:40000,
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fugiat?"
    },

    {
        productName:"fridge",
        Price:32000,
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fugiat?"
    },

    {
        productName:"Bike",
        Price:140000,
        desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, fugiat?"
    }
]

//  console.log(products[i].productName)
//     console.log(products[i].Price)
//     console.log(products[i].desc)

// let h1 = document.querySelector("h1")
// h1.className = "text"
// // h1.classList.add("text" , "xyz")

// // h1.classList.remove("heading")



let body = document.querySelector("body")

for(let i =0 ; i < products.length; i++){

    let productCard = document.createElement("div")
    productCard.className= "productcard"
    body.appendChild(productCard)

    let pname  = document.createElement("h1")
    pname.textContent = `Product Name :- ${products[i].productName}`
    productCard.appendChild(pname)

    let ProductPrice = document.createElement("h2")
    ProductPrice.textContent = `Price :- ${products[i].Price}`
    productCard.appendChild(ProductPrice)

    let description = document.createElement("h2")
    description.innerText = `Description :- ${products[i].desc}`
    productCard.appendChild(description)
   
}


