const mobiles = [
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-5g-1.jpg",
    productname: "Redmi Note 14 5G",
    price: "₹16,999",
    desc: "Affordable 5G smartphone with large display and long-lasting battery."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-14-pro-5g-1.jpg",
    productname: "Redmi Note 14 Pro 5G",
    price: "₹23,999",
    desc: "Powerful mid-range phone with excellent camera and AMOLED display."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-ce-3-lite-5g-1.jpg",
    productname: "OnePlus Nord CE 5G",
    price: "₹26,499",
    desc: "Smooth OxygenOS experience with reliable performance and clean UI."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-nord-5g-1.jpg",
    productname: "OnePlus Nord 5G",
    price: "₹32,499",
    desc: "Premium design with fast performance and good camera quality."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/nothing/nothing-phone-1-1.jpg",
    productname: "Nothing Phone (1)",
    price: "₹26,999",
    desc: "Unique transparent design with smooth performance and clean Android."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/google/google-pixel-8a-1.jpg",
    productname: "Google Pixel 8a",
    price: "₹39,999",
    desc: "Best-in-class camera with pure Android and AI features."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/oppo/oppo-find-x7-1.jpg",
    productname: "Oppo Find X Series",
    price: "₹74,999",
    desc: "Flagship smartphone with premium design and high-end camera system."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s23-fe-1.jpg",
    productname: "Samsung Galaxy S23 FE",
    price: "₹44,999",
    desc: "Fan edition flagship with strong performance and AMOLED display."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/realme/realme-12-pro-plus-1.jpg",
    productname: "Realme 12 Pro+ 5G",
    price: "₹29,999",
    desc: "Stylish phone with curved display and powerful camera setup."
  },
  {
    productimg: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v29-1.jpg",
    productname: "Vivo V29 5G",
    price: "₹32,999",
    desc: "Slim smartphone with excellent portrait camera and fast charging."
  },

   {
    productimg: "https://fdn2.gsmarena.com/vv/pics/vivo/vivo-v29-1.jpg",
    productname: "Realme 8 pro",
    price: "₹32,999",
    desc: "Slim smartphone with excellent portrait camera and fast charging."
  }
];

//  console.log(mobiles[i].productname)

let wrapper = document.querySelector(".wrapper")

for(let i =0 ; i < mobiles.length ; i++){

    let card = document.createElement("div")
    card.className = "card"
    wrapper.appendChild(card)

    let left = document.createElement("div")
    left.className = "left"
    card.appendChild(left)

    let image = document.createElement("img")
    image.src= mobiles[i].productimg
    left.appendChild(image)

    let right = document.createElement("div")
    right.className = "right"
    card.appendChild(right)

    let pname = document.createElement("h1")
    pname.textContent = mobiles[i].productname
    right.appendChild(pname)

    let productPrice = document.createElement("h2")
    productPrice.textContent = mobiles[i].price
    right.appendChild(productPrice)

    let Pdesc = document.createElement("p")
    Pdesc.textContent =  mobiles[i].desc
    right.appendChild(Pdesc)

    let btn = document.createElement("button")
    btn.textContent = "Buy Now"
    right.appendChild(btn)

}
