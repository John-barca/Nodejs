// 系统模块 fs 文件操作
const fs = require('fs');

// 读取文件内容 语法
// 文件参数中若有 [], 说明这个参数为可选参数
// callback: 当某个 API 的参数是回调函数时，我们用 callback 作为标识
// 回调函数的作用： 当前实例中，当文件内容读取完成后，通过回调函数来获取
// 文件读取的结果
// fs.readFile('文件路径/文件名称'[, '文件编码'], callback);

// 以下是具体语法实例
// 读取当前文件目录下的 a.js 文件内容
fs.readFile('./a.js', 'utf-8', (err, doc) => {
    // 如果文件读取发生错误， 参数 err 的值为错误对象 否则 err 的值为 null
    // doc 参数为文件内容
    if (err == null) {
        // 在控制台输出文件内容
        console.log(doc);
    }
});