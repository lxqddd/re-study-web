import Player from './player.js'
 class Game{
    constructor(){
        this.player = null;
    }
    login(name){
        
        this.player = new Player(name);
        // 调取初始化方法；
        this.player.heroes.forEach(hero=>{
            // 触发了自定事件；
            hero.trigger("initFn");
        })
        // 一旦登录  有玩家
        // this.player = {
        //     name:name,
        //     heroes:[{
        //         name:"亚瑟",
        //         ico:"",
        //         skills:[{},{},{}],
        //         skins:[{},{},{}]
        //     },{
        //         name:"鲁班",
        //         ico:"",
        //         skills:[],
        //         skins:[]
        //     }],
        // }
    }
}

// 单例模式
let instance;
// 多个参数  及 不定参数；
// 自定义函数；
// 工厂模式；
export default function createInstance(...arg){
    if(!instance){
        instance = new Game(...arg);
    }
    return instance;
}
