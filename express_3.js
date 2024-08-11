const express=require('express');
const path=require('path');
const server=express();
server.listen(7777,'localhost',()=>{
    console.log("server is listennig on port 7777")
});
server.get('/blog',(req,res)=>{
    console.log(req.url,req.method)
    res.sendFile('./myblogfiles/blog.html',{root:__dirname});
});
server.get('/newblog',(req,res)=>{
    console.log(req.url,req.method);
    res.sendFile('./myblogfiles/newblog.html',{root:__dirname});
});
server.get('/about',(req,res)=>{
    console.log(req.url,req.method);
    res.sendFile('./myblogfiles/about.html',{root:__dirname})
});