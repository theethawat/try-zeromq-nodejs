const zmq = require("zeromq")

async function run() {
  const sock = new zmq.Subscriber()

  sock.connect("tcp://127.0.0.1:3000")
  sock.subscribe("Kitty cats")
  console.log("Subscriber connect to port 3000")

  for await (const [topic, msg] of sock) {
    console.log(
      "Received a message related to " + topic + " Containing Message is" + msg
    )
  }
}

run()
