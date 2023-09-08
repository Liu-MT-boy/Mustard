/**
 * 获取时间 yyyy-MM-dd hh:mm:ss
 *
 * @param {object} date - 传入new Date()格式化后数据
 * @method {} padStart - 字符串补0
 * @return {string} - 返回时间
 */
export function formatDate(date: Date) {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const seconds = date.getSeconds().toString().padStart(2, '0')
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}

/**
 * 二分查找法
 *
 * @param {Array} date - 接收有序数组
 * @param {Number} date - 接收需要查找的数值
 * @return {Number} - 返回数值在数组中的索引
 */

export function getBinary(arr: number[], target: number) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    let pointer = Math.floor((left + right) / 2)
    if (arr[pointer] === target) {
      return pointer
    } else if (arr[pointer] > target) {
      right = pointer - 1
    } else if (arr[pointer] < target) {
      left = pointer + 1
    }
  }
  return -1
}

export class Person {
  name: string;
  phone: string;
  constructor(name: string, phone: string) {
    this.name = name
    this.phone = name
  }
}
