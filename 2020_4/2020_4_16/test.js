var http = require("http");
var fs = require("fs");
// 创建服务器，参数是一个回调函数，表示如果有请求进来，要做什么
var server = http.createServer(function (req, res) {
    fs.readFile("../hello.js", function (err, data) {
        // req 表示请求， request; res 表示响应, response
        // 设置 http 头部，状态码是 200, 文件类型是 html, 字符集是 utf-8
        res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" });
        res.end(data);
    });
});

// 运行服务器, 监听3000端口
server.listen(3000, "127.0.0.1");

// Nodejs 是服务器程序，写的 js 语句，都将运行在服务器上
// 返回给客户的，都是已经处理好的纯 html

// 如果想修改程序，必须中断当前运行的服务器
// 重新 Node 一次，刷新，才行，Node只是 js 的运行环境
// Nodejs 没有根目录概念 它根本没有任何的 web 容器
// 让Nodejs提供静态服务非常难
// 也就是说， Nodejs中，如果看见一个网址是
// 127.0.0.1:3000/fang
// 不一定有一个文件叫做fang， 有可能是同目录下的 test.html
