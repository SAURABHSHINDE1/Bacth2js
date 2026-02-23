const  getWeather = async()=>{

    let res = await fetch("https://api.weatherapi.com/v1/current.json?key=b95c8bb723b2437f95544104253107&q=Mumbai")

    let data = await res.json()

    console.log(data)


    let body = document.querySelector("body")

    let city = document.createElement("h2")
    city.textContent = "City :" + data.location.name
    body.appendChild(city)

    let temp = document.createElement("h2")
    temp.textContent ="Temp:" + data.current.temp_c
    body.appendChild(temp)


}