/*
 * @Author: 安风 jiadongyao@cai-inc.com
 * @Date: 2023-02-22 23:49:47
 * @LastEditors: 安风 jiadongyao@cai-inc.com
 * @LastEditTime: 2023-03-02 15:45:23
 * @FilePath: /auto-test-jest-demo/no-jest.js
 * @Description: 
 */
// 不使用自动化测试框架应该如何进行测试？
const result = ZcyZooTeam('Zero');
const value = 'ZooTeam';
if(result !== value) {
  throw Error(`ZcyZooTeam 结果应为${value}, 但实际结果为${result}`);
}

const resultDays = happyDay(30, 12);
const valueDays = 'happy 360 days!';
if(resultDays !== valueDays) {
  throw Error(`happyDay 结果应为${valueDays}, 但实际结果为${resultDays}`);
}

// 封装一下
function expect(result) {
  return {
    // 用于判断是否为期望值
    toBe(value) {
      if(result !== value) {
        throw Error(`结果应为${value}, 但实际结果为${result}`);
      }
    }
  }
}
expect(ZcyZooTeam('Zero')).toBe('ZcyZooTeam');
expect(happyDay(30, 12)).toBe('happy 360 days!');

// 如何能让自己知道当前测试的是哪个呢？
function test(msg, fn) {
  try {
    fn();
    console.log(msg + '测试通过！');
  } catch (error) {
    console.log(msg + '测试未通过！' + error);
  }
}

test('测试ZcyZooTeam', () => {
  expect(ZcyZooTeam('Zero')).toBe('ZcyZooTeam')
})

// test('测试happy day', () => {
//   expect(happyDay(30, 12)).toBe('happy 360 days!');
// })