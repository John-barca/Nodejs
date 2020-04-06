# Node.js 简介
 - **V8**引擎本身就是用于 Chrome 浏览器的**JS**解释部分，但是 Ryan Dahl 这哥们，把**V8**搬到了服务器上，用于做服务器的软件。
 - Ryan Dahl是一个专注于实现高性能**Web**服务器优化的专家，几经挫折后，遇到**V8**而诞生的项目。
 - Nodejs 是一个让 JavaScript 运行在服务器端的开发平台，它让 JavaScript 的触角伸到了服务器端，可以与PHP,JSP,Python,Ruby平起平坐。
 - Nodejs不是一种独立的语言，Nodejs使用JavaScript进行编程，运行在JavaScript引擎上(**V8**)。
 - 与PHP,JSP等语言相比，Nodejs跳过了Apache、Naginx、IIS等HTTP服务器，它自己不用建设在任何服务器软件之上，Nodejs的许多设计理念与经典架构(LAMP)有着很大的不同，可以提供强大的伸缩能力。
 - Nodejs的自身哲学，是花最小的硬件成本，追求更高的并发，更高的处理性能。
## V8 引擎
 1. 没有同步 I/O, 不会出现一个同步 I/O 导致事件循环性能急剧降低的情况
 2. V8 性能足够好，远远比 Python、Ruby等其他脚本语言的引擎快
 3. JavaScript 语言的闭包特性非常方便，比C中的回调函数好用