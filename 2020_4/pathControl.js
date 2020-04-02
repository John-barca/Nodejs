// 路径拼接 API
const path = require('path');
const fs = require('fs');

// path.join ('路径', '路径', ...);
// 不属于耗时操作， 直接用返回值获取结果
let finalPath = path.join('Europe', 'England', 'ManUnited', 'Lingard');
// 输出路径拼接结果
console.log(finalPath); 

// 文件路径相对命令行当前工作路径
// 为了安全使用绝对路径
// __dirname 为当前文件的绝对路径

console.log(__dirname);
console.log(path.join(__dirname, 'fileControl.js'));

fs.readFile(path.join(__dirname, 'fileControl.js'), 'utf-8', (err, doc) => {
    console.log(err);
    console.log(doc);
});