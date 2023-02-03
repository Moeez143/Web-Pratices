    // CWH new playlist video 96 start here 
// console.log("hey I am running");

    // CWH new playlist video 98 start here 

    const express = require('express')
    const path = require('path')
    const app = express()
    const port = 3000
    
    app.get('/', (req, res) => {
        res.send('Hello World!')
    })

    app.get('/home', (req, res) => {
        res.sendFile(path.join(__dirname,'./food project 2/food project 2.html'));
        // res.send('This is home')
    })

    app.get('/contact', (req, res) => {
        res.sendFile(path.join(__dirname,'./index2.html'));
        // res.send('This is contact')
    })


    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`)
    })