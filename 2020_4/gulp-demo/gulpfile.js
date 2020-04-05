// Gulp 中提供的方法
// gulp.src(): 获取任务要处理的文件
// gulp.dest(): 输出文件
// gulp.task(): 建立 gulp 任务
// gulp.watch(): 监控文件的变化

// 以下部分为代码示例
const gulp = require('gulp');

// 使用 gulp.task() 方法建立任务
// 参数1 为任务的名称
// 参数2 为任务的回调函数
gulp.task('first', () => {
    console.log('人生中第一次执行 gulp 任务');
    // 获取要处理的文件
    gulp.src('./src/a.txt')
    // 将处理后的文件输出到 dist 目录
    .pipe(gulp.dest('dist/'));
});