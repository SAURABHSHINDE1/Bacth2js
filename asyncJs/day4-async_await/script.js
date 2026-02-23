
async function getdata(){
    try{

        
    let res = await fetch('https://jsonplaceholder.typicode.com/posts')

    let data = await res.json()

    console.log(data)

    let body = document.querySelector("body")

    data.forEach((elem)=>{

        let id = document.createElement("h3")
        id.textContent =elem.id
        body.appendChild(id)

        let title = document.createElement("h3")
        title.textContent = elem.title
        body.appendChild(title)

    })

    }
    catch(error){
        console.log(error)
    }
}


getdata()

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((res)=>res.json())
// .then((data)=>console.log(data))

