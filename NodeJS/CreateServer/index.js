const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    
    if (url === "/"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>ANA SAYFA</h2>");
    }else if(url === "/index"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Welcome to Index page</h2>");
    }else if(url === "/about"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Welcome to About page</h2>");
    }else if(url === "/contact"){
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h2>Welcome to Contact page</h2>");
    }else{
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h2>SAYFA BULUNAMADI</h2>");
    }
    res.end();
})

const port = 5000;
server.listen(port, () => {
    console.log(`sunucu port ${port} de başlatıldı`);
})