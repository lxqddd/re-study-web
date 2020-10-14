/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-14 22:23:59
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-14 22:51:42
 */
import Koa from 'koa'
import { Get, Auth, Post } from '../KKB/decorators'

// @Controller('/user')
// 参考：https://www.npmjs.com/package/koa-ts-controllers
export default class User {
  @Get('/user')
  @Auth()
  async index(ctx: Koa.Context) {
    ctx.body = '用户中心首页'
  }

  @Get('/register')
  async register(ctx: Koa.Context) {
    ctx.body = '注册'
  }

  @Get('/login')
  async login(ctx: Koa.Context) {
    ctx.body = '登录'
  }

  @Post('/test')
  async test(ctx: Koa.Context) {
    ctx.body = '测试'
  }
}
