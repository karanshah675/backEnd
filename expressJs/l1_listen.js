let express = require('express') // Imports the Express.js module

const app = express() // Creates an Express application

const port = 3000 // Defines the port number on which the server will run

app.listen(port, () => { // Starts the server and listens for incoming requests on port 3000
    console.log('port created'); // Runs once the server has successfully started
})