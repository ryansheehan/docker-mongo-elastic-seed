const http = require('http');
const fs = require('fs');
const util = require('util');
const logFile = fs.createWriteStream('/logs/server.log', {flags: 'a'});
const logStdout = process.stdout;

console.log = function() {
	const now = new Date(Date.now()).toLocaleString() + ": ";
	logFile.write(now + util.format.apply(null, arguments) + '\n');
	logStdout.write(util.format.apply(null, arguments) + '\n');
}
console.error = console.log;

const server = http.createServer((request, response)=>{
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
});

server.listen(3030);

console.log("Server running at http://localhost:3030");