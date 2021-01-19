var httpServer = require("http-server");
// console.log(httpServer)
var path = require("path");

var pathToHtmlAndJsFiles = path.join(__dirname);
console.log(pathToHtmlAndJsFiles)
var server = httpServer.createServer({ root: pathToHtmlAndJsFiles });
server.listen(3000);
