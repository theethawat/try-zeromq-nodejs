const zmq = require("zeromq")
const express = require("express")
const app = express()
const port = 3330

async function run() {
  const sock = new zmq.Pull()

  sock.connect("tcp://127.0.0.1:3000")
  console.log("Worker connected to port 3000")

  for await (const [msg] of sock) {
    console.log("work: %s", msg.toString())
  }
}

app.get("/", (req, res) => {
  res.send("Waiting in Console, Working is just now.")
  run()
})

app.listen(port, () => {
  console.log("server listen at port " + port)
})
