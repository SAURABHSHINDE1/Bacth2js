

// let data = new Promise((resolve , reject)=>{

//     let isdata = false 

//     if(isdata){
//         resolve("data ahe ")
//     }
//     else{
//         reject("data nahi ye ")
//     }

// })

// data.then((data)=>console.log(data))

// data.catch((err)=>{
//     console.log(err)
// })


function data (){

    return new Promise((resolve , reject)=>{
        let isdata = false

        if(isdata){
            setTimeout(()=>{
                resolve("data ahe")
            },1000)
        }
        else{
            reject("data nahi ye ")
        }

    })

}


data().then((data)=>{
    console.log(data)
})

data().catch((err)=>{
    console.log(err)
})