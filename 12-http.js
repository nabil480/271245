 const http = require(`http`);
 const server = http.createServer((req,res)=>{
    if(req.url == `/`){
        res.end(`welcome to my first web Page`);
    }
  if(req.url==`/about`){
    res.end(`you are in the about page`);
  }
  res.end(`<h1>OOPS!!!!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">Back to home page</a>`)
 });

 server.listen(5000);