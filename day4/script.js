

let form = document.querySelector("#form")

form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    let formData = new  FormData(form)


    let username = formData.get("username")

    console.log(username)

    let email  = formData.get("email")

    console.log(email)

    let gender = formData.get("gender")

    console.log(gender)

    let languages = formData.getAll("language")

    console.log(languages)

})