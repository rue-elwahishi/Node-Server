const fs = require('fs');
    const myPath = require('path')

    // const createFolder = fs.mkdir(myPath.join(__dirname, '/html'), {}, (error) => {
    //     if(error) {
    //         console.log('error creating folder')
    //     }
    //     else {
    //         console.log('success')
    //     }
    // })

    const createFile = fs.writeFile(myPath.join(__dirname, "/html", "index.html"), "<h1> this is it </h1>", (error) => {
        if(error){
            console.log('could not create')
        }
        else {
            console.log("file created")
        }
    }) 

    const readFile = fs.readFile(myPath.join(__dirname, "/html", "index.html"), (error, data) => {
        if(error){
            console.log(error)
        }
        else {
            console.log(data)
        }
    })