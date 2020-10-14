/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-14 22:23:59
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-14 22:54:54
 */
export function Get(url: string) {
  return function (target: any, name: string) {
    if (!target.routes) {
      target.routes = []
    }

    target.routes.push({
      verb: 'get',
      url,
      name
    })
  }
}

/**
 * 暗号：装饰器
 */
export function Post(url: string) {
  return function (target: any, name: string) {
    if (!target.routes) {
      target.routes = []
    }

    target.routes.push({
      verb: 'post',
      url,
      name
    })
  }
}

export function Auth() {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    // 验证是否登录
    let value = descriptor.value

    // console.log('value', value);

    let isLogin = true

    descriptor.value = async function (ctx) {
      if (isLogin) {
        value(ctx)
      } else {
        ctx.body = '你还没有登录'
      }
    }
  }
}
