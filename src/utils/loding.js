// 引入loding

import { ElLoading } from 'element-plus'

// loding的加载处理
const loding = {
  // 阻止loding
  lodingPrevent: null,
  // 开启loding加载
  open() {
    if (this.lodingPrevent === null) {
      this.lodingPrevent = ElLoading.service({
        target: 'body',
        background: 'rgba(0,0,0,0.4)'
      })
    }
  },
  // 关闭loding加载
  close() {
    if (this.lodingPrevent !== null) {
      this.lodingPrevent.close()
      this.lodingPrevent = null
    }
  }
}

export default loding
