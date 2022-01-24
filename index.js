const app = require('express')()
const port = 8080

app.listen(port, () => {
    console.log(`Api is up at: http://localhost:${port}`)
})