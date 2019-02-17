/* jshint esversion: 6 */
let storageHelp = function (options) {
  console.log(options)
  this.options = options;
}
/**
 * 根据key获取storage的值
 */
storageHelp.prototype.getValue = function (key) {
  if (!this.options) {
    return null;
  }
  let _type = this.options.type;
  let _stroage = (_type === "session" ? sessionStorage : _type === "local" ? localStorage : null);
  return _stroage && _stroage.getItem(key) || null;
}
/**
 * 记录storage内容
 */
storageHelp.prototype.setValue = function (key, value) {
  if (!this.options) {
    return null;
  }
  let _type = this.options.type;
  let _window=this.options.window;
  console.log(_window)
  let _stroage = (_type === "session" ? _window._sessionStorage : _type === "local" ? _window._localStorage : null);
  return _stroage && _stroage.setItem(key, value) || false;
  // this.window.sessionStorage.setItem(key, value)
}
module.exports = storageHelp;