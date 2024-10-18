const express = require("express")

const app = express()

app.get("/", (req, res) => {
  return res.json("Hello, world!")
})


const PORT = 3333
app.listen(PORT, () => {
  console.log(`Server is running on server ${PORT}`)
})