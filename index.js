const express = require('express')
const app = express()















app.set("view engine", "ejs")

app.use((req, res, next) => {
  console.log(req.method + " " + req.path)
  next()
})

app.use(express.static(__dirname + "/public"))


app.get("/", (req, res) => {
  res.render("index.html", data)
})


app.get("/level", (req, res) => {
  res.render("category.ejs", )
})


app.get("/steps/:0", (request, responce) => {
  res.render("category.ejs", )
})

app.get("/items/:1", (req, res) => {
  const hi = req.prams.hi
res.render("steps.ejs", inventory[1].items[hi])
})

app.listen(3000, () => {
  console.log("Server running")
})