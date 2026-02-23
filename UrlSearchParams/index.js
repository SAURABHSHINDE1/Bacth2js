

let btn = document.querySelector("button")

let sname = "aditya Nibhe"
let age = 20

btn.addEventListener("click" , ()=>{

    window.location.href= `result.html?q=${sname}&age=${age}`

})


// "https://www.amazon.in/iQOO-Storage-Fastest-Snapdragon-Processor/dp/B0FYGBSKFB/?_encoding=UTF8&pd_rd_w=Vd59r&content-id=amzn1.sym.f386ea46-6bed-486b-a270-abe9eeba887c&pf_rd_p=f386ea46-6bed-486b-a270-abe9eeba887c&pf_rd_r=A8CVCVV659N66R8YGWQR&pd_rd_wg=1ovFu&pd_rd_r=1772356e-7827-466d-83b3-6e628cd7fa6f&ref_=pd_hp_d_atf_dealz_cs&th=1"


// "http://127.0.0.1:5500/UrlSearchParams/result.html?q=aditya%20Nibhe&age=20"


// _encoding=UTF8

// pd_rd_w=Vd59r

// content-id=amzn1.sym.f386ea46-6bed-486b-a270-abe9eeba887c 