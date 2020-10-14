/*
 * @Descripttion:
 * @version:
 * @Author: 刘向前
 * @Date: 2020-10-14 22:23:59
 * @LastEditors: 刘向前
 * @LastEditTime: 2020-10-14 22:49:17
 */
import Koa from 'koa'
import KoaRouter from 'koa-router'
import glob from 'glob'

interface IOptions {
  port?: number
  host?: string
  controllerDir: string
}

const defaultOptions = {
  port: 8888,
  host: 'localhost'
}

export default class KKB {
  private options: IOptions
  private server: Koa
  public router: KoaRouter

  constructor(opts: IOptions) {
    this.options = { ...defaultOptions, ...opts }

    this.server = new Koa()

    this.router = new KoaRouter()

    this.addRoutes()

    this.server.use(this.router.routes())
  }

  private addRoutes() {
    // 自动收集路由函数并注册

    // 1、获取到所有与路由有关的类信息，并自动载入

    // console.log('path', this.options.controllerDir);

    const controllerFiles = glob.sync(this.options.controllerDir)
    // console.log('controllerFiles', controllerFiles);

    controllerFiles.forEach(controllerFile => {
      const Controller = require(controllerFile).default
      // console.log('Controller', Controller);

      // 2、实例化控制器类
      const controller = new Controller()

      // 3、把控制器对象中方法与对应的路由进行绑定，这里需要知道每一个控制器对象的每个方法与路由的对应关系
      // console.log(controller.routes);

      controller.routes.forEach(route => {
        // route:
        //        {
        //             verb: 'get',
        //             url: '/',
        //             name: 'index'
        //         }

        this.router[route.verb](route.url, controller[route.name])
      })
      console.log(controller.routes)
    })
  }

  start() {
    return this.server.listen(this.options.port, this.options.host, () => {
      console.log(`服务器启动成功：http://${this.options.host}:${this.options.port}`)
    })
  }
}
