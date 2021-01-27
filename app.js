const express = require('express')
const os = require('os')

const app = express()
app.get('/', (request, response) => {
  response.send(`Hello from ${os.hostname()}`);
})

const port = 3000
app.listen(port, () => console.log(`Listening on port ${port}`))