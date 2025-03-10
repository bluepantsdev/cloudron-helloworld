"use strict";

const http = require("http");
const version = "0.0.6";

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .main {
            text-align: center;
            padding: 50px;
        }
        footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            text-align: center;
            padding: 10px 0;
            background-color: #f0f0f0;
            font-size: 12px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="main">
        <h1>Hello World!</h1>
    </div>
    <footer>Version ${version}</footer>
</body>
</html>
`;

const server = http.createServer(function (request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(htmlContent);
});

server.listen(3000);

console.log("Server running at port 3000");