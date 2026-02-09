// map method

// let arr = [24,65,78,90,89,76,12]

// let result = arr.map((elem)=>{ 
//    return elem + 20
// })

// console.log(arr)

// console.log(result)

const mobileShopData = [
  {
    id: 1,
    brand: "Apple",
    model: "iPhone 14",
    price: 69999,
    color: "Midnight",
    storage: "128GB",
    stock: 10
  },
  {
    id: 2,
    brand: "Samsung",
    model: "Galaxy S23",
    price: 74999,
    color: "Phantom Black",
    storage: "256GB",
    stock: 8
  },
  {
    id: 3,
    brand: "OnePlus",
    model: "OnePlus 11R",
    price: 39999,
    color: "Sonic Black",
    storage: "128GB",
    stock: 15
  },
  {
    id: 4,
    brand: "Xiaomi",
    model: "Redmi Note 12 Pro",
    price: 25999,
    color: "Blue",
    storage: "128GB",
    stock: 20
  },
  {
    id: 5,
    brand: "Realme",
    model: "Realme GT Neo 3",
    price: 36999,
    color: "White",
    storage: "256GB",
    stock: 12
  },
  {
    id: 6,
    brand: "Vivo",
    model: "Vivo V27",
    price: 32999,
    color: "Emerald Green",
    storage: "128GB",
    stock: 9
  },
  {
    id: 7,
    brand: "Oppo",
    model: "Oppo Reno 10",
    price: 28999,
    color: "Silver",
    storage: "256GB",
    stock: 7
  },
  {
    id: 8,
    brand: "Motorola",
    model: "Edge 40",
    price: 29999,
    color: "Nebula Green",
    storage: "128GB",
    stock: 11
  }
];

// console.log(mobileShopData)

// Map Method

let result  = mobileShopData.map((elem)=>{

    return {
        newBrand : elem.brand,
        newModel: elem.model,
        updatedP : elem.price + 4000,
        newColor: elem.color,
        newStorage :elem.storage
    }
})

// console.log(result)

// sort Method

// let arr = [34,67,12,22,33,89,90,78,45]

// let newarr = arr.sort((a ,b)=> b - a)

// console.log(newarr)

// reverse Method

// let arr = [34,67,12,22,33,89,90,78,45]

// let reversed = arr.reverse()

// console.log(reversed)

// join method

// let arr = ["a" , "b" , "c"]

// let strArray = arr.join("*")

// console.log(strArray)

// let str= "abc"

// let newarr = Array.from(str)

// console.log(newarr)