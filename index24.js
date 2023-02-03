// video 63 done here
// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
// //   res.end('Hello World jani');
// res.end('Hello World jani');

// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// video 64 start here
// const fs = require('fs');
// const { connected } = require('process');
// let text = fs.readFileSync("demo.txt", "utf8");
// text = text.replace("second", "forst second");

// console.log("The file content is : "); 
// console.log(text);

// // console.log("creating new file....");
// fs.writeFileSync("demo2.txt",text); 

// // CWH Video 65 start here......
// // ......blocking and non-blocking code.......

// console.log("this is video 65 message......");
// let text1 =fs.readFile('demo.txt', (err, data) => {
//     // if (err) throw err;
//     console.log(data);
// });
// console.log("below the function message");
// console.log(text1);

// CWH Video 66 start here......

const http = require('http');
const fs = require('fs');
const FileContent = fs.readFileSync('index8.html');
const server = http.createServer((req , res)=>{
    res.writeHead(200 , {'Content-Type' : 'text/html'});
    res.end(FileContent);
});
server.listen(80 , '127.0.0.1' , ()=>{
    console.log("server listening at 8000");
});