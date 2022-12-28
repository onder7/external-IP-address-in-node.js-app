var app = require("express")();
var http = require('http');
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
resp.on('data', function(ip) {
app.get("/", function (req, res) {
 // console.log(req.socket.remoteAddress);
 // console.log(req.ip);
  res.send("ip: " + ip);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
}
);
});
  });
