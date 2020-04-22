var http = require("http"); 
// http 模块
// Nodejs 中，将很多的功能，划分为了一个个 module，大陆的书翻译为
// 模块，台湾的书翻译为模组
// 这是因为，有些程序要使用 fs 功能，有些不用，
// 所以用什么 require 什么

// 创建一个服务器，回调函数表示接收到请求之后做的事情

var server = http.createServer(function(req, res){
    // req 参数表示请求
    // res 表示响应
    console.log("服务器接收到了请求" + req.url);
    // 设置一个响应头
    res.writeHead(200,{"Content-Type":"text/plain;charset=UTF8"});
    res.write("<h1>我是主标题</h2>");
    // 必须有 res.end()
    res.end("success");
});

// 监听端口
server.listen(3000, "127.0.0.1");