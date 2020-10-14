import Koa from 'koa';
import {Get} from '../KKB/decorators';


export default class Main {

    // public routes = [
    //     {
    //         verb: 'get',
    //         url: '/',
    //         name: 'index'
    //     }
    // ]

    @Get('/')
    async index(ctx: Koa.Context) {
        ctx.body = '首页';
    }

}