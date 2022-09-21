const http = require("http")

const server = http.createServer((req, res) => {
  res.end("<h1>Home</h1>")
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
