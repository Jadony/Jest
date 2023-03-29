// function ZcyZooTeam(str) {
//   return 'Zcy' + str;
// }

// function happyDay(day, mounth) {
//   return 'happy ' + (day * mounth) + ' days!';
// }
// 由于是node环境执行，如果想使用jest进行自动化测试，需要将函数以模块的形式导出
// module.exports = {
//   ZcyZooTeam,
//   happyDay
// }


// 如果想用es6的形式导出，需要使用babel插件进行转换
// @babel/core@7.4.5  @babel/preset-env@7.4.5
export function ZcyZooTeam(str) {
  return 'Zcy' + str;
}

export function happyDay(day, mounth) {
  return 'happy ' + (day * mounth) + ' days!';
}