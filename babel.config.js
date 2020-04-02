/**
 * 2个插件
 * 1.add-module-exports
 * export default 会出现导出的问题(默认导出.default，不能直接解构),
 * 解决方案：使用插件 https://www.npmjs.com/package/babel-plugin-add-module-exports
 *
 * 2.transform-class-properties
 * 解决class类中兼容独自定义属性
 */
module.exports = {
  presets: [
    "@vue/cli-plugin-babel/preset"
    // ["@babel/preset-env", { modules: "commonjs" }]
  ]
  //   plugins: ["add-module-exports", "transform-class-properties"]
};
