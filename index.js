const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express()
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
app.get('/view=:path', (req, res) => {
    if(fs.existsSync(req.params.path)){
        try {
            const data = fs.readFileSync(req.params.path, 'utf8')
            res.send(data)
        } catch (err) {
            res.send(err)
        }
    }
    else{
        res.send("file not find")
    }
  })

app.listen(3000, () => {
  var url = 'http://localhost:3000'
  console.log('Server is listening on port 3000')
  console.log("localhost:3000"+ url.link("localhost:3000"))
})