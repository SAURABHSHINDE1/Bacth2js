let form = document.querySelector("#form")

form.addEventListener("submit" , (e)=>{
    e.preventDefault()

    let data = new FormData(form)

    let userName = data.get("username")

    console.log(userName)


    let email = data.get("email")

    console.log(email)

    let gender = data.get("gender")

    console.log(gender)


    let languages = data.getAll("language")

    console.log(languages)

    let range = data.get("range")

    console.log(range)

    let course = data.get("course")

    console.log(course)
})
