//// a.js
//// 每个 js 文件为 一个模块
//// 在模块内定义变量
//let version = 1.0;
//
//// 在模块内定义方法
//const sayHi = name => `您好, ${name}`;
//
//// 向模块外部导出数据
//exports.version = version;
//exports.sayHi = sayHi;
//// 在另一个模块 b.js 文件中进行使用

//const add = (n1, n2) => n1 + n2;
//exports.add = add;

const greeting = name => `hello ${name}`;

const x = 100;

exports.x = x;

module.exports.greeting = greeting;

module.exports = {
    name: 'Lingard'
}

exports = {
    age: 20
}
// module.exports 与 exports 导出对象的区别:
// exports 是 module.exports 的别名(地址引用关系)，导出对象最终以 module.exports 为准
// 当 exports 对象和 module.exports 对象指向的不是同一个对象时， 以module.exports 为准