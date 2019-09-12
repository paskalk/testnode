const http = require("http");
const url = require('url');  
const fs = require('fs'); 
const hostname = '127.0.0.1';
const port ='3000';


const server = http.createServer( (request, response) => {
    // response.statusCode = 200;
    // response.setHeader('Content-Type', 'text/html');
    // response.end('<!doctype html> <html lang="en"><table><th>Names</th><tr><td>Hello World</td><tr></table>');

    fs.readFile(__dirname + '/index.html', function(error, data) {  
      if (error) {  
          response.writeHead(404);  
          response.write('\n \n    Oops!There was a problem');  
          console.log(error);
          response.end();  
      } else {  
          response.writeHead(200, {  
              'Content-Type': 'text/html'  
          });  
          response.write(data);  
          response.end();  
      }  
  });  
}
);

server.listen(port,hostname,() =>{
    console.log(`Server running at http://${hostname}:${port}`); 
})

