//清除其他配置，只剩下如下配置 
//fis.match('*.{js,css,png,jpg}', {
//	useHash: true
//});

//启用插件,让所有文件都使用相对路径
fis.hook('relative');

fis.match('**', {
    relative: true
})
 // 启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.es6', {
    rExt: '.js',
    parser: fis.plugin('es6-babel', {

    })
});

//less转换成css
fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

//发布时，忽略项目中的这些文件
fis.set('project.ignore', ['.git/**', 'fis-conf.js', 'fis-conf01.js', 'fis-conf02.js', '*.bat']);

 //压缩合并js文件并生成app.min.js文件
//fis.match('js/**.js', {
//  // fis-optimizer-uglify-js 插件进行压缩，已内置
//  optimizer: fis.plugin('uglify-js', {
//      mangle: {},
//      compress: {
//          drop_console: true
//      }
//  }),
//  packTo: 'js/app.min.js'
//});

//压缩js文件
fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

//压缩css文件
fis.match('*.css', {
  useSprite: true,
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

//压缩整合图片
fis.match('*.{png,jpg}', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

