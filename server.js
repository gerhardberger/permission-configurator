const express = require('express')

const PORT = process.env.PORT || 8888
const app = express()

app.use(express.static('dist'))
app.listen(PORT, () => console.log(`Server running on ${PORT}`))
