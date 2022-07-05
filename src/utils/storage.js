/**
 * 本地存储数据
 * @param {*} key
 * @param {*} value
 */
//存储数据
export const localStoragesetItem = (key, value) => {
  if (typeof value == 'object') {
    value = JSON.stringify(value)
  }
  localStorage.setItem(key, value)
}
//取数据
export const localStorageGetItem = (key) => {
  const data = localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
//删单个数据
export const localStorageRemove = (key) => {
  localStorage.removeItem(key)
}

//删全部数据
export const localStorageClear = (key) => {
  localStorage.clear()
}
