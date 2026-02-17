
// function greet(callback){
//     console.log("hello")
//     callback()
// }

// function say(){
//     console.log("i am saurabh")
// }

// greet(say)


// forEatch(()=>{})



    // function greet(callback){

    //     console.log("hello")

    //     callback()

    // }


    // greet(()=>{
    //     console.log("i am saurabh")

    //     greet(()=>{
    //         console.log("i am aditya")

    //         greet(()=>{
    //             console.log(" i am prajwal")
    //         })
    //     })

    // })


    // greet(()=>{
    //     console.log("i am saurabh")
    // })

    //  greet(()=>{
    //     console.log("i am Aditya")
    // })

    //  greet(()=>{
    //     console.log("i am Prajwal")
    // })





    // function data(callback){
    //     callback()
    // }

    // data(()=>{
    //    setTimeout(()=>{
    //      console.log("data 1")
    //    },2000)

    //     data(()=>{
    //         setTimeout(()=>{
    //      console.log("data 2")
    //    },2000)

    //         data(()=>{
    //           setTimeout(()=>{
    //      console.log("data 3")
    //    },2000)

    //             data(()=>{
    //                 console.log("final data ")
    //             })
    //         })
    //     })

    // })


    setTimeout(()=>{
        console.log("data 1")
        console.log("getting data 2...")

        setTimeout(()=>{
            console.log("data 2")
              console.log("getting data 3...")
                setTimeout(()=>{
                    console.log("data 3")
                      console.log("getting final data...")

                            setTimeout(()=>{
                                console.log("final data")
                            },2000)

                },2000)

        }, 2000)

    }, 2000)